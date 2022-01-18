const contactUsManager = require("../business-logic/contact-us.js");

const contactUsController = {
  postMessage: async (req, res) => {
    try {
      const { senderName, senderEmail, senderText } = req.body;
      const sendEmail = await contactUsManager.sendingEmail(
        senderName,
        senderEmail,
        senderText
      );

      if (!sendEmail) {
        res.status(401).json({
          Message: "your email message is not complete!",
        });
      } else {
        res.status(200).json({
          ok: true,
          message: `message by ${senderName} successfully sent!`,
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = contactUsController;
