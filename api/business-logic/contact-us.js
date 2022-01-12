const nodemailer = require("nodemailer");
const environment = require("../config");
//const sgMail = require("@sendgrid/mail");
const GEmail = environment.GEmail;
const GPassword = environment.GPassword;

const auth = {
  //sendmail: true,
  //newline: "unix",
  //path: "/usr/sbin/sendmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    api_key: "f890d8c48bc6975ba8a70a764bcf1d4f-0be3b63b-2aee9519",
    domain: "sandbox4ff9182ad67e479fa0f0595e0afa0b09.mailgun.org",
    url: "https://api.eu.mailgun.net",
    user: GEmail,
    pass: GPassword,
  },
};

const contactUsManager = {
  sendingEmail: async (senderEmail, senderName, senderText) => {
    /*
    sgMail.setApiKey("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");
  const msg = {
    to: `hyfconnect@gmail.com`,
    from: senderEmail,
    subject: `New Contact Form ${senderName}!`,
    html: `<p><b>Name:</b> ${senderName}</p> <p><b>Email:</b> ${senderEmail}</p><p><b>Message:</b> <br><br> <i>${senderText}</i></p>`,
  };
  
  sgMail
    .send(msg)
    .then((res) => res.json())
    .catch((err) => res.send(err));
}),
*/

    const transporter = nodemailer.createTransport(auth);
    const mailOptions = {
      from: `Email from ${senderName} <${senderEmail}>`,
      to: "hyfconnect@gmail.com",
      subject: `Message from contact form by ${senderName} email ${senderEmail}`,
      //text: senderEmail,
      html: senderText,
    };
    //console.log(mailOptions);
    await transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log(null, data);
      }
    });
    return {
      senderEmail,
      senderName,
      senderText,
    };
  },
};

module.exports = contactUsManager;
