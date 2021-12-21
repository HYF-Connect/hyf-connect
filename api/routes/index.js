"use strict";

const express = require("express");

const router = express.Router();

// require routes files
const userRoutes = require("./user");
const resourceRoutes = require("./resource");

// use them with this router
router.use("/resource", resourceRoutes);
router.use("/users", userRoutes);

// export the routes
module.exports = router;
