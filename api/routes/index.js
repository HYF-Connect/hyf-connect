"use strict";

const express = require("express");

const router = express.Router();

// require routes files
const userRoutes = require("./user");
const resourceRoutes = require("./resource");
const loginRoutes = require("./login.js")
// use them with this router
router.use("/resource", resourceRoutes);
router.use("/users/:userId", async (req, res, next) => {
try {
   const user = await userManager.getAllUsers(req.params.userId);
   req.user = user;
   next();
} catch (error) {
   res.status(400).send({
      message: `${user} provided could not be found`,
   });
}
});
router.use("/users", userRoutes);
router.use("/users", loginRoutes);

// export the routes
module.exports = router;
