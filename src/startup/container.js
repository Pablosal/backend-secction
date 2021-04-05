//contenedor de injeccion de dependencias
const { createContainer, asClass, asFunction, asValue } = require("awilix");
const { HomeService } = require("../services");
const { HomeController } = require("../controllers");
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const config = require("../config");
const container = createContainer();
const {CommentRepository,IdeaRepository,UserRepository} = require('../repositories')
const { Comment, Idea, User } = require("../models/index");
const app = require(".");
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  }).register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  })
module.exports = container;
