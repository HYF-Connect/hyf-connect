const nodemailer = require("nodemailer");

const environment = require("../config");

const GEmail = environment.GEmail;
const GPassword = environment.GPassword;
const mailApiKey = environment.mailApiKey;
const mailDomain = environment.mailDomain;
const mailURL = environment.mailURL;
const auth = {
  service: "gmail",
  port: 465,
  secure: true,
  secureConnection: false,

  auth: {
    api_key: mailApiKey,
    domain: mailDomain,
    url: mailURL,
    user: GEmail,
    pass: GPassword,
  },
};

const contactUsManager = {
  sendingEmail: async (senderName, senderEmail, senderText) => {
    const transporter = nodemailer.createTransport(auth);
    const mailOptions = {
      from: senderEmail,
      to: "hyfconnect@gmail.com",
      subject: `Message from <${senderEmail}> "${senderName}" through the contact form`,
      html: senderText,
    };
    await transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("error", err);
      }
    });
    return {
      senderName,
      senderEmail,
      senderText,
    };
  },
};

module.exports = contactUsManager;
