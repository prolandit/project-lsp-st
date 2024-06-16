const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRouter = require("./router");
/**
 *
 * @param {import("express").Express} app
 * @param {*} port
 */
const expressSetup = (app, port, controllers) => {
  // dependencies
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(`${__dirname}/public`));
  app.use(bodyParser.urlencoded({ extended: true }));

  // start middleware

  app.use(mainRouter(controllers));

  // end middlware
  app.use((error, req, res, next) => {
    if (error) {
      console.log(["API Request", "Invalid input", "ERROR"], { info: error });
      res.statusCode = 400;
      const timeDiff = process.hrtime(req.startTime);
      const timeTaken = Math.round((timeDiff[0] * 1e9 + timeDiff[1]) / 1e6);
      const logData = {
        method: req.method,
        url: req.originalUrl || req.url,
        status: res.statusCode,
        timeTaken,
      };
      console.log(["API Request", "Invalid input", "info"], logData);
      return res.status(400).json(Boom.badRequest().output.payload);
    }

    next();
  });

  app.use((req, res, next) => {
    const oldSend = res.send;
    res.send = async (data) => {
      res.send = oldSend;
      const statusCode = (data.output && data.output.statusCode) || res.statusCode;
      let bodyResponse = data;

      if (statusCode !== 200 && data.isBoom) {
        bodyResponse = data.output.payload;
      }

      const response = {
        statusCode,
        bodyResponse,
      };

      const timeDiff = process.hrtime(req.startTime);
      const timeTaken = Math.round((timeDiff[0] * 1e9 + timeDiff[1]) / 1e6);
      const logData = {
        method: req.method,
        url: req.originalUrl || req.url,
        status: res.statusCode,
        timeTaken,
      };

      console.log(["API Request", "info"], logData);
      return res.status(response.statusCode).send(response.bodyResponse);
    };

    next();
  });

  app.listen(port, () => {
    console.log(["Info"], `Server started on port ${port}`);
  });
};

module.exports = expressSetup;
