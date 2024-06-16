/**
 *
 * @param {ReturnType<import("./../controller/auth")>} controller
 */
const authRouter = (controller) => {
  const router = require("express").Router();

  router.post("/register", controller.register);
  router.post("/login", controller.login);

  return router;
};

module.exports = authRouter;
