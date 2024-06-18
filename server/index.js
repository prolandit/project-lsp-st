require("dotenv").config();
const express = require("express");

const createConnection = require("./data-source/database/connection");
const config = require("./config/config");

// models
const expressSetup = require("./app/express");
const AuthUseCases = require("./app/use-cases/auth");
const models = require("./models");
const sequilizeRelationInit = require("./models/init-relationship");
const AuthController = require("./app/controller/auth");
const SkemaSertifikasiController = require("./app/controller/skema-sertifikasi");
const SkemaSertifikasiUseCase = require("./app/use-cases/skema-sertifikasi");
const app = express();

const database = createConnection({
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  dbname: config.db.dbname,
  dialect: config.db.dialect,
});

//
const model = sequilizeRelationInit(models(database));

const useCases = {
  auth: AuthUseCases({ userModel: model.user, tokenModel: model.token }),
  skemaSertifikasi: SkemaSertifikasiUseCase({
    formSkema: model.formSkema,
    unitKerja: model.unitKerja,
    unitKompetensi: model.unitKompetensi,
    elemen: model.elemen,
    kuk: model.kuk,
  }),
};

const controllers = {
  authController: AuthController(useCases.auth),
  skemaSertifikasiController: SkemaSertifikasiController(
    useCases.skemaSertifikasi
  ),
};

expressSetup(app, config.app.port, controllers);

// const dirname = path.resolve();
