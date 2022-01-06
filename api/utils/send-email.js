const { SENDMAIL_API_KEY } = require("../config.js");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDMAIL_API_KEY);

const sendEmail = (to, from, subject, content) => {
  try {
    const data = {
      to: to,
      from,
      subject,
      html: content,
    };
    return sgMail.send(data);
  } catch (e) {
    return new Error(e);
  }
};

module.exports = sendEmail;
