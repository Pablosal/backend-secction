const { Router } = require("express");
const { ParseMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();
  router.get("/", ParseMiddleware, IdeaController.getAll);
  router.get("/:ideaId", IdeaController.get);
  router.get("/:ideaId/all", IdeaController.getUserIdeas);
  router.patch("/:ideaId", IdeaController.update);
  router.delete("/:ideaId", IdeaController.delete);
  router.post("/", IdeaController.create);
  router.post("/:ideaId/upvote", IdeaController.upvoteIdea);
  router.post("/:ideaId/downvote", IdeaController.downIdea);
  return router;
};
