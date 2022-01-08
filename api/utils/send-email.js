/*
const { SENDMAIL_API_KEY } = require("../config.js");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(SENDMAIL_API_KEY);

const sendEmail = (to, from, subject, content) => {
  try {
    const data = {
      to: to,
      from,
      subject,
      html: content,
    };
    return sgMail.send(data);
  } catch (error) {
    throw new Error("error from the email sender", error);
  }
};

module.exports = sendEmail;
*/
const nodemailer = require("nodemailer");

// Not the movie transporter!
const sendEmail = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "hyfconnect@gmail.com", // Your email id
    pass: "HappyLlamas15", // Your password
  },
});
module.exports = sendEmail;
