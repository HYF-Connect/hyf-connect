const express = require("express");
const contactUsController = require("../controllers/contact-us.js");

const contactUsRoutes = express.Router();

contactUsRoutes.post("/", contactUsController.postMessage);

module.exports = contactUsRoutes;
