class BaseService {
  constructor(repository) {
    this.repository = repository;
  }
  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }
    const currentEntity = await this.repositoryl.get(id);
    if (!currentEntity) {
      const error = new Error();
      error.status = 400;
      error.message = "Entity does not found";
      throw error;
    }
    return currentEntity;
  }
  async getAll(pageSize , pageNum ) {
    return await this.repository.getAll(pageSize,pageNumF);
  }
  async create(entity) {
    return await this.repository.create(entity);
  }
  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = "id must be sent";
      throw error;
    }
    return await this.repositoryl.update(id);
  }
  async delete(id){
    if (!id) {
        const error = new Error();
        error.status = 400;
        error.message = "id must be sent";
        throw error;
      }
      return await this.repositoryl.delete(id);
  }
}

module.exports = BaseService;
