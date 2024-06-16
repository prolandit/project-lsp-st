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

const app = express();

const database = createConnection({
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  dbname: config.db.database,
  dialect: config.db.dialect,
});

//
const model = sequilizeRelationInit(models(database));

const useCases = {
  auth: AuthUseCases({ userModel: model.user, tokenModel: model.token }),
};

const controllers = {
  authController: AuthController(useCases.auth),
};

expressSetup(app, config.app.port, controllers);

// const dirname = path.resolve();
