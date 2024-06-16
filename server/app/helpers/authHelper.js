const Boom = require('boom');
const _ = require('lodash');

const db = require('../../models');
const GeneralHelper = require('./generalHelper');
const bcrPassword = require('../utils/bycryptPassword');
const jwtUtils = require('../utils/jwt');

const fileName = 'server/helpers/authHelper.js';

const registerUser = async (dataObject) => {
    const { email, fullName, password, role } = dataObject;

    try {
        const isRegistered = await db.tb_user.findOne({
            where: {
                email,
            }
        });

        if (!_.isEmpty(isRegistered)) {
            return Promise.reject(Boom.badRequest('Email has been registered!'));
        };

        const hashedPass = bcrPassword.__hashPassword(password);

        await db.tb_user.create({ email, password: hashedPass, fullName, role });

        return Promise.resolve({
            statusCode: 201,
            message: "Account registration successfully!"
        });
    } catch (error) {
        console.log([fileName, 'registerUser', 'ERROR'], { info: `${error}` });
        return Promise.reject(GeneralHelper.errorResponse(error));
    }
}

const loginUser = async (dataObject) => {
    const { email, password } = dataObject;

    try {
        const isUser = await db.tb_user.findOne({
            where: {
                email
            }
        });

        if (_.isEmpty(isUser)) {
            return Promise.reject(Boom.badRequest('Email not registered!'));
        };

        const isPassMatched = bcrPassword.__comparePassword(password, isUser.password);

        if(!isPassMatched) {
            return Promise.reject(Boom.badRequest('Wrong credentials!'));
        };

        const token = jwtUtils.__generateToken({
            id: isUser.id,
            fullName: isUser.fullName,
            role: isUser.role
        });

        return Promise.resolve({ 
            statusCode: 200,
            message: "Login successfully!",
            token 
        });
    } catch (error) {
        console.log([fileName, 'loginUser', 'ERROR'], { info: `${error}` });
        return Promise.reject(GeneralHelper.errorResponse(error));
    }
}

module.exports = { registerUser, loginUser }
