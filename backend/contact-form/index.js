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

const nodemailer = require('nodemailer');

exports.contactForm = async (req, res) => {
  // res.set('Access-Control-Allow-Origin', 'nationalunionofthehomeless.org');
  res.set('Access-Control-Allow-Origin', '*');

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
    subject: 'Test mail',
    text: 'Node.js testing mail for NUH.'
  };

  mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
      console.log("[mailTransporter]" + err)
      return res.status(200).send("[mailTransporter] " + err)
    } else {
      console.log("Success.")
      return res.status(200).send("Success.")
    }
  });
};

// Simple function for testing Secret access.
exports.helloSecret = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  console.log(await secret)
  console.log(req.body)
  console.log(req.body["first-name"])
  res.status(200).send("HELLO "+req.body["first-name"]+" SECRET " + await secret);
}

// Testing
// var mocks = require('node-mocks-http');

// exports.helloSecret({}, mocks.createResponse())

// var request = mocks.createRequest({
//   method: 'POST',
//   url: 'blargh',
//   body: {
//     "first-name" : "John",
//     "last-name" : "Doe",
//     "email" : "john.doe@gmail.com",
//     "content" : "This is the body of my contact form.",
//   }
// })

// var response = mocks.createResponse()

// exports.helloSecret(request, response)

// console.log(response)

// exports.contactForm(request, response)
