const express = require("express");
const router = express.Router();

// require routes files
const userRoutes = require("./user");
const loginRoutes = require("./login.js");
const AuthRoutes = require("./authentication-route");
const projectRoutes = require("./project");
const languageRoutes = require("./language");
const classRoutes = require("./class");
// use them with this router

router.use(AuthRoutes);
router.use("/users", userRoutes);
router.use("/users", loginRoutes);
router.use("/projects", projectRoutes);
router.use("/languages", languageRoutes);
router.use("/classes", classRoutes);
// this route was added for testing the middleware
router.get("/auth", (req, res) => {
   console.log(req.loggedInUser);
   res.json({ mes: "ok" });
});
// export the routes
module.exports = router;
