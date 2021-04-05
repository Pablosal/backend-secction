const { Router } = require("express");
const {CACHE_TIME} = require('../helpers')
const {
  AuthMiddleware,
  ParseMiddleware,
  CacheMiddleware,
} = require("../middlewares");
module.exports = function ({ UserController }) {
  const router = Router();
  router.get(
    "/:userId",
    [AuthMiddleware, ParseMiddleware, CacheMiddleware(CACHE_TIME)],
    UserController.get
  );
  router.get("/", UserController.getAll);
  router.patch("/:userId", UserController.update);
  router.delete("/:userId", UserController.delete);
  return router;
};
