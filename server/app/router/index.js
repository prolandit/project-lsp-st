const authRouter = require("./auth");

const mainRouter = (controllers) => {
  const router = require("express").Router();

  router.use(authRouter(controllers.authController));

  return router;
};

module.exports = mainRouter;
