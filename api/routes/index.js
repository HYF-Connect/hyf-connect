const express = require("express");
const router = express.Router();
<<<<<<< HEAD
=======
// const userManager = require("../business-logic/user");
>>>>>>> 07382f19270eb6947ba59a566030e5af614aea9a

// require routes files
const userRoutes = require("./user");
const loginRoutes = require("./login.js");
const AuthRoutes = require("./authentication-route");
const projectRoutes = require ("./project");
// use them with this router

router.use(AuthRoutes);
router.use("/users", userRoutes);
router.use("/users", loginRoutes);
router.use("/projects",projectRoutes);
// this route was added for testing the middleware
router.get("/auth", (req, res) => {
   console.log(req.loggedInUser);
   res.json({ mes: "ok" });
});
// export the routes
module.exports = router;
