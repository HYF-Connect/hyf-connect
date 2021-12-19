const express = require("express");
const userManager = require("../business-logic/user");

const router = express.Router();

// require routes files
const userRoutes = require("./user");

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

// use them with this router
router.use("/users", userRoutes);

// export the routes
module.exports = router;
