var util = require("util")

// Import the Secret Manager client and instantiate it:
const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();
async function accessSecret(name) {
  // Access the secret.
  const [accessResponse] = await client.accessSecretVersion({
    name: "projects/winged-comfort-298422/secrets/"+name+"/versions/latest"
  });
  const responsePayload = accessResponse.payload.data.toString('utf8');
  return responsePayload;
}
[secret,
 email_address,
 mailgun_api_key,
 mailgun_password,
 mailgun_domain,
 db_user,
 db_pass,
 recaptcha_secret_key] = [
  accessSecret("my-secret").then((result)=>{return result}),
  accessSecret("email-address").then((result)=>{return result}),
  accessSecret("mailgun-api-key").then((result)=>{return result}),
  accessSecret("mailgun-password").then((result)=>{return result}),
  accessSecret("mailgun-domain").then((result)=>{return result}),
  accessSecret("db-user").then((result)=>{return result}),
  accessSecret("db-pass").then((result)=>{return result}),
  accessSecret("recaptcha-secret-key").then((result)=>{return result}),
]

// Initiate the mailer.
const mailgun = require("mailgun-js")
const startupMailgun = async () => {
  return mailgun({apiKey: (await mailgun_api_key), domain: (await mailgun_domain)});
}
let mg = startupMailgun();

// Initiate the database.
// https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/cloud-sql/mysql/mysql/server.js
const mysql = require('promise-mysql');
const createUnixSocketPool = async config => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

  // Establish a connection to the database
  return await mysql.createPool({
    user: (await db_user),
    password: (await db_pass),
    database: process.env.DB_NAME,
    socketPath: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
  });
};
const createPool = async () => {
  const config = {
    // 'connectionLimit' is the maximum number of connections the pool
    // is allowed to keep at once.
    connectionLimit: 5,

    // 'connectTimeout' is the maximum number of milliseconds before a
    // timeout occurs during the initial connection to the database.
    connectTimeout: 10000, // 10 seconds
    // 'acquireTimeout' is the maximum number of milliseconds to wait when
    // checking out a connection from the pool before a timeout error occurs.
    acquireTimeout: 10000, // 10 seconds
    // 'waitForConnections' determines the pool's action when no connections are
    // free. If true, the request will queued and a connection will be presented
    // when ready. If false, the pool will call back with an error.
    waitForConnections: true, // Default: true
    // 'queueLimit' is the maximum number of requests for connections the pool
    // will queue at once before returning an error. If 0, there is no limit.
    queueLimit: 0, // Default: 0

    // The mysql module automatically uses exponential delays between
    // failed connection attempts.
  };
  return await createUnixSocketPool(config);
};

const ensureSchema = async pool => {
  // Wait for tables to be created (if they don't already exist).
  await pool.query(
    `
CREATE TABLE IF NOT EXISTS people
      ( id serial NOT NULL,
        time timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
        first_name CHAR(255) NOT NULL,
        last_name CHAR(255) NOT NULL,
        email CHAR(255) UNIQUE NOT NULL,
        PRIMARY KEY (id) );`
  );
  console.log("Ensured that 'people' table exists.");

  await pool.query(
    `
CREATE TABLE IF NOT EXISTS messages
      ( id serial NOT NULL,
        time timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
        person_id bigint unsigned NOT NULL,
        content text NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (person_id) REFERENCES people(id) );`
  );
  console.log("Ensured that 'messages' table exists.");
};

const createPoolAndEnsureSchema = async () =>
  await createPool()
    .then(async pool => {
      await ensureSchema(pool);
      return pool;
    })
    .catch(err => {
      console.error(err);
      throw err;
    });

// Set up a variable to hold our connection pool. It would be safe to
// initialize this right away, but we defer its instantiation to ease
// testing different configurations.
// let pool = createPoolAndEnsureSchema();

// Recaptcha verification.
const fetch = require('isomorphic-fetch');
const verifyRecaptcha = async (req, res) => {
  const secret_key = (await recaptcha_secret_key);
  const token = req["g-recaptcha-response"];
  console.log("Recaptcha token: "+token)
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  return await fetch(url, { method: 'post' })
    .then(response => {
      console.log("ReCaptcha response: " + JSON.stringify(response.json()))
      return true;
    })
    .then(google_response => {
      if (google_response.score < 0.5){
        console.log("Recaptcha score too low.")
        res.status(403).send("Recaptcha score too low.  I think you're a robot.")
      } else {
        return true;
      }
    })
    .catch(error => {
      console.error("Recaptcha error: " + error)
      res.status(500).send("Recaptcha error.")
      return false;
    });
};

// Exported functions.
exports.contactForm = async (req, res) => {
  // console.log("Request: "+util.inspect(req))

  // res.set('Access-Control-Allow-Origin', 'nationalunionofthehomeless.org');
  res.set('Access-Control-Allow-Origin', '*');
  if (true == (await verifyRecaptcha(req, res))){ console.log("Verified Recaptcha."); }

  // Email the contact forward.
  mg = await mg
  const data = {
    from: (await email_address),
    to: (await email_address),
    replyTo: req.body.email,
    subject: "NUH contact from " + req.body.fname + " " + req.body.lname,
    text: req.body.content,
  }
  mg.messages().send(data, function (error, body) {
    if (error){
      console.error(error);
    } else {
      console.log(body);
    }
  });

  // Save the contact in the database.
//   pool = await pool
//   try {
//     const stmt = `INSERT IGNORE INTO people (first_name, last_name, email) VALUES (?, ?, ?);`;
//     // Pool.query automatically checks out, uses, and releases a connection
//     // back into the pool, ensuring it is always returned successfully.
//     await pool.query(stmt, [req.body.fname, req.body.lname, req.body.email]);
//   } catch (err) {
//     // If something goes wrong, handle the error in this section. This might
//     // involve retrying or adjusting parameters depending on the situation.
//     // [START_EXCLUDE]
//     console.error("[DATABASE]: " + err);
//     return res
//       .status(500)
//       .send(
//         'Unable to initiate contact! Please check the application logs for more details.'
//       )
//       .end();
//   }
//   console.log("Ensured "+req.body.email+" in people.")

//   try {
//     const stmt = `
// INSERT INTO messages(content, person_id)
// VALUES (?, (SELECT id FROM people WHERE email = ?));`
//     // Pool.query automatically checks out, uses, and releases a connection
//     // back into the pool, ensuring it is always returned successfully.
//     await pool.query(stmt, [req.body.content, req.body.email]);
//   } catch (err) {
//     // If something goes wrong, handle the error in this section. This might
//     // involve retrying or adjusting parameters depending on the situation.
//     // [START_EXCLUDE]
//     console.error("[DATABASE]: " + err);
//     // return res
//     //   .status(500)
//     //   .send(
//     //     'Unable to initiate contact! Please check the application logs for more details.'
//     //   )
//     //   .end();
//   }
  console.log("Ensured "+req.body.email+" in people.")
  res.status(303).send(`Thank you.
Your message has been received.
You may close this window.`);
};

// Simple function for testing Secret access.
exports.helloSecret = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (true == (await verifyRecaptcha(req, res))){ console.log("Verified Recaptcha."); }

  console.log(await secret)
  console.log(req)
  res.status(200).send("HELLO "+req.body.fname+" "+req.body.lname+" SECRET " + await secret);
}

// Testing
var mocks = require('node-mocks-http');

var response = mocks.createResponse()
var request = mocks.createRequest({
  method: 'POST',
  url: 'blargh',
  body: {
    fname : "John",
    lname : "Doe",
    email : "john.doe@gmail.com",
    content : "This is the body of my contact form.",
  }
})

// exports.helloSecret(request, response)

exports.contactForm(request, response)
