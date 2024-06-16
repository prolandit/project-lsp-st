require("dotenv").config();
const express = require("express");
// const dotenv = require('dotenv');
const Boom = require("boom");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const Auth = require("./server/api/auth");
// const User = require('./server/api/user');

const createConnection = require("./data-source/database/connection");
const config = require("./config/config");

// models
const UserModel = require("./models/token");
const expressSetup = require("./app/express");
const TokenModel = require("./models/token");
const AuthUseCases = require("./app/use-cases/auth");

const app = express();

const database = createConnection({
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  dbname: config.db.database,
  dialect: config.db.dialect,
});

const model = {
  user: UserModel(database),
  token: TokenModel(database),
};

const useCases = {
  auth: AuthUseCases({ userModel: model.user, tokenModel: model.token }),
};

const controllers = {};

expressSetup(app, config.app.port);

// const dirname = path.resolve();
