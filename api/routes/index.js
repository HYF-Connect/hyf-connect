"use strict";

const express = require("express");
const router = express.Router();
const userManager = require("../business-logic/user");

// require routes files
const userRoutes = require("./user");
const loginRoutes = require("./login.js");
const AuthRoutes = require("./authentication-route");
// use them with this router

router.use(AuthRoutes);
router.use("/users", userRoutes);
router.use("/users", loginRoutes);
// this route was added for testing the middleware
router.get("/auth", (req, res) => {
   console.log(req.loggedInUser);
   res.json({ mes: "ok" });
});
// export the routes
module.exports = router;
