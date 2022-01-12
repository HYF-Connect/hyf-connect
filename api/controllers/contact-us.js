const contactUsManager = require("../business-logic/contact-us.js");

const contactUsController = {
  postMessage: async (req, res) => {
    try {
      const body = req.body;
      const senderEmail = body.Email;
      const senderName = body.Name;
      const senderText = body.Message;
      const mailSent = await contactUsManager.sendingEmail(
        senderEmail,
        senderName,
        senderText
      );

      if (!mailSent) {
        res.status(401).json({
          Message: "your email message is not complete!",
        });
      } else {
        res
          .status(200)
          .json({
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
