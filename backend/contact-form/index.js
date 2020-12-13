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
[secret, email_address, email_password] = [
  accessSecret("my-secret").then((result)=>{return result}),
  accessSecret("email-address").then((result)=>{return result}),
  accessSecret("email-password").then((result)=>{return result}),
]

// Initiate the mailer.
const nodemailer = require('nodemailer');

// Initiate the database.
// https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/cloud-sql/mysql/mysql/server.js
const mysql = require('promise-mysql');
const createUnixSocketPool = async config => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

  // Establish a connection to the database
  return await mysql.createPool({
    user: process.env.DB_USER, // e.g. 'my-db-user'
    password: process.env.DB_PASS, // e.g. 'my-db-password'
    database: process.env.DB_NAME, // e.g. 'my-database'
    // If connecting via unix domain socket, specify the path
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
CREATE TABLE IF NOT EXISTS contacts
      ( id serial NOT NULL,
        time timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
        person_id bigint unsigned NOT NULL,
        content string NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (person_id) REFERENCES people(id) );`
  );
  console.log("Ensured that 'contacts' table exists.");
};

const createPoolAndEnsureSchema = async () =>
  await createPool()
    .then(async pool => {
      await ensureSchema(pool);
      return pool;
    })
    .catch(err => {
      logger.error(err);
      throw err;
    });

// Set up a variable to hold our connection pool. It would be safe to
// initialize this right away, but we defer its instantiation to ease
// testing different configurations.
let pool = await createPoolAndEnsureSchema();

// Exported functions.
exports.contactForm = async (req, res) => {
  // res.set('Access-Control-Allow-Origin', 'nationalunionofthehomeless.org');
  res.set('Access-Control-Allow-Origin', '*');

  // Email the contact forward.
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: await email_address,
      pass: await email_password
    }
  });

  let mailDetails = {
    from: await email_address,
    to: await email_address,
    replyTo: req.body.email,
    subject: "NUH contact from " + req.body.fname + " " + req.body.lname,
    text: req.body.content,
  };

  mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
      console.error("[MAILTRANSPORT]: " + err)
    } else {
      console.log("Contact successful.")
    }
  });

  // Save the contact in the database.
  pool = pool || (await createPoolAndEnsureSchema());
  try {
    const stmt = 'REPLACE INTO people (first_name, last_name, email) VALUES (?, ?, ?)';
    // Pool.query automatically checks out, uses, and releases a connection
    // back into the pool, ensuring it is always returned successfully.
    await pool.query(stmt, [req.body.fname, req.body.lname, req.body.email]);
  } catch (err) {
    // If something goes wrong, handle the error in this section. This might
    // involve retrying or adjusting parameters depending on the situation.
    // [START_EXCLUDE]
    console.error("[DATABASE]: " + err);
    return res
      .status(500)
      .send(
        'Unable to initiate contact! Please check the application logs for more details.'
      )
      .end();
  }

  res.status(200).send("Contact successful.");  
};

// Simple function for testing Secret access.
exports.helloSecret = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
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
