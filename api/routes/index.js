const express = require("express");
const router = express.Router();

// require routes files
const userRoutes = require("./user");
const loginRoutes = require("./login.js");
const AuthRoutes = require("./authentication-route");
const projectRoutes = require("./project");
const languageRoutes = require("./language");
const classRoutes = require("./class");
const regionRoutes = require("./region");
const nationalityRoutes = require("./nationality");
const typeRoutes = require("./type");
const skillRoutes = require("./skill");
// use them with this router

router.use(AuthRoutes);
router.use("/users", userRoutes);
router.use("/users", loginRoutes);
router.use("/projects", projectRoutes);
router.use("/languages", languageRoutes);
router.use("/classes", classRoutes);
router.use("/regions", regionRoutes);
router.use("/nationalities", nationalityRoutes);
router.use("/types", typeRoutes);
router.use("/skills", skillRoutes);
// this route was added for testing the middleware
router.get("/auth", (req, res) => {
   console.log(req.loggedInUser);
   res.json({ mes: "ok" });
});
// export the routes
module.exports = router;
