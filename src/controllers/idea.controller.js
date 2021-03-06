let _ideaService = null;
class UserController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }
  async get(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.get(ideaId);
    return res.send(idea);
  }
  async getAll(req, res) {
    const ideas = await _ideaService.getAll(pageSize,pageNum);
    return res.send(ideas);
  }
  async update(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const updatedIdea = await _ideaService.update(ideaId, body);
    return res.send(updatedIdea);
  }
  async delete(req, res) {
    const { ideaId } = req.params;
    const deletedIdea = await _ideaService.delete(ideaId);
    return res.send(deletedIdea);
  }
  async getUserIdeas(req, res) {
    const { userId } = req.params;
    const ideas = await _ideaService.getUserIdeas(userId);
    return res.send(ideas);
  }
  async upvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.upvoteIdea(ideaId);
    return res.send(idea);
  }
  async downVote(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaService.downVote(ideaId);
    return res.send(idea);
  }
}
module.exports = UserController;
