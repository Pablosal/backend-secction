const BaseService = require("./base.service");
let _ideaRepository = null;
class IdeaService extends BaseService {
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }
  async getUserIdeas(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "userId must be sent";
      throw error;
    }
    return await _ideaRepository.getUserIdeas(author);
  }
  async upvoteIdea(ideaId) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "ideaId must be sent";
      throw error;
    }
    const idea = await _ideaRepository.get(ideaId);
    if (!idea) {
      const error = new Error();
      error.status = 400;
      error.message = "Idea must exist";
      throw error;
    }
    idea.upvotes.push(true);
    return await _ideaRepository.update(idea,{upvotes:idea.upvotes})
  }
}

module.exports = IdeaService;
