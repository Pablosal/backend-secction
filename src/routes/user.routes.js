const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

module.exports = function ({ UserController }) {
  const router = Router();
  router.get("/:userId", authMiddleware, UserController.get);
  router.get("/", UserController.getAll);
  router.patch("/:userId", UserController.update);
  router.delete("/:userId", UserController.delete);
  return router;
};
