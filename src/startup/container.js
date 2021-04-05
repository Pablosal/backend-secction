//contenedor de injeccion de dependencias
const { createContainer, asClass, asFunction, asValue } = require("awilix");
const { HomeService } = require("../services");
const { HomeController,IdeaController,CommentController,UserController } = require("../controllers");
const { HomeRoutes,IdeaRoutes,CommentsRoutes,UserRoutes  } = require("../routes/index.routes");
const Routes = require("../routes");
const config = require("../config");
const container = createContainer();
const {CommentRepository,IdeaRepository,UserRepository} = require('../repositories')
const { Comment, Idea, User } = require("../models/index");
const {CommentService,IdeaService,UserService} = require("../services")
const app = require(".");
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    CommentsRoutes: asFunction(CommentsRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
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
