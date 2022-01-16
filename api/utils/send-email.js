const nodemailer = require("nodemailer");
const environment = require("../config");

const GEmail = environment.GEmail;
const GPassword = environment.GPassword;

const sendEmail = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GEmail, // Your email id
    pass: GPassword, // Your password
  },
});
module.exports = sendEmail;
