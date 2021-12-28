const express = require("express");
const userController = require("../controllers/user");

const userRoutes = express.Router();

userRoutes.get("/", userController.get);
userRoutes.post("/register", userController.post);

userRoutes.use("/users:userId", async (req, res, next) => {
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

module.exports = userRoutes;
