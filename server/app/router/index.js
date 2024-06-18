const authRouter = require("./auth");
const skemaSertifikasi = require("./skema-sertifikasi");

const mainRouter = (controllers) => {
  const router = require("express").Router();

  router.use(authRouter(controllers.authController));
  router.use(skemaSertifikasi(controllers.skemaSertifikasiController));

  return router;
};

module.exports = mainRouter;
