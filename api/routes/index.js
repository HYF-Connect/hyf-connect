"use strict";

const express = require("express");
const router = express.Router();
const userManager = require('../business-logic/user')

// require routes files
const userRoutes = require("./user");
const resourceRoutes = require("./resource");
const loginRoutes = require("./login.js")
const AuthRoutes = require('./authentication-route');
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
router.use(AuthRoutes);
router.use("/users", userRoutes);
router.use("/users", loginRoutes);
// this route was added for testing the middleware
router.get('/auth', (req, res)=>{
   console.log(req.loggedInUser);
   res.json({mes: 'ok'})
});
// export the routes
module.exports = router;
