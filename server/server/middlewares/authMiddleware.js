const Boom = require('boom');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const Moment = require('moment');

const GeneralHelper = require('../helpers/generalHelper');

const jwtSecretToken = process.env.JWT_SECRET_TOKEN || 'super_strong_key';
const fileName = 'server/middlewares/authMiddleware.js';

const validateToken = (req, rep, next) => {
  const { authorization } = req.headers;

  try {
    if (_.isEmpty(authorization)) {
      throw Boom.unauthorized();
    }

    const token = authorization.split(' ')[1];
    const verifiedUser = jwt.verify(token, jwtSecretToken);
    if (_.isEmpty(verifiedUser) || !_.has(verifiedUser, 'exp')) {
      throw Boom.unauthorized();
    }

    const isTokenExpired = verifiedUser.exp < Moment().unix();
    if (isTokenExpired) {
      throw Boom.unauthorized();
    }
    
    req.body.dataToken = verifiedUser;

    return next();
  } catch (err) {
    console.log([fileName, 'validateToken', 'ERROR'], { info: `${err}` });
    return rep.send(GeneralHelper.errorResponse(err))
  }
}

module.exports = {
  validateToken
}