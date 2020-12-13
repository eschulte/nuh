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
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email_address,
        pass: email_password
    }
});

exports.contactForm = (req, res) => {
    // res.set('Access-Control-Allow-Origin', 'nationalunionofthehomeless.org');
    res.set('Access-Control-Allow-Origin', '*');

    let mailDetails = {
        from: process.env.USER,
        to: process.env.USER,
        subject: 'Test mail',
        text: 'Node.js testing mail for NUH.'
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            return res.status(200).send("Error: " + err)
        } else {
            return res.status(200).send("Success.")
        }
    });
};

// Simple function for testing Secret access.
exports.helloSecret = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send("HELLO SECRET: " + await secret);
}
