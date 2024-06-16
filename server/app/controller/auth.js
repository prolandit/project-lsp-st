/**
 *
 * @param {Awaited<ReturnType<import("./../use-cases/auth")>>} authUsecase
 * @returns
 */
const AuthController = (authUsecase) => {
  const register = async (req, res) => {
    res.send(authUsecase.authRegister(req.body));
  };

  const login = async (req, rep) => {};

  return { register, login };
};

module.exports = AuthController;
