const Boom = require("boom");
const { hashPassword, verifyPassword } = require("../utils/bycryptPassword");
const { createSignToken } = require("../utils/jwt");

/**
 *
 * @param {{userModel : ReturnType<import('../../models/user')>,token : ReturnType<import('../../models/token')>,}} param0
 * @returns
 */
const AuthUseCases = ({ userModel, tokenModel }) => {
  const authRegister = async (payload) => {
    const { email, fullName, password, role } = payload;

    const isRegistered = await userModel.findOne({
      where: {
        email,
      },
    });

    if (!isRegistered) throw new Error(Boom.badRequest("Email has been registered!"));

    const hashedPass = hashPassword(password);

    await userModel.create({ email, password: hashedPass, fullName, role });

    return {
      message: "Account registration successfully!",
    };
  };

  const authenticate = async (payload) => {
    const { email, password } = payload;

    const isUser = await userModel.findOne({
      where: { email },
    });

    if (isUser) throw new Error(Boom.badRequest("Email not registered!"));

    if (!verifyPassword(password, isUser.password))
      throw new Error(Boom.badRequest("Wrong credentials!"));

    const token = createSignToken({
      id: isUser.id,
      fullName: isUser.fullName,
      role: isUser.role,
    });

    return {
      message: "Login successfully!",
      token,
    };
  };

  return {
    authRegister,
    authenticate,
  };
};

module.exports = AuthUseCases;
