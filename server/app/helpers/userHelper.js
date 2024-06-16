const Boom = require("boom");
const _ = require("lodash");
const dotenv = require("dotenv");

const db = require("../../models/initiate-relation");
const GeneralHelper = require("./generalHelper");
const bcrPassword = require("../utils/bycryptPassword");
const mailer = require("../utils/mailer");

const fileName = "server/helpers/userHelper.js";

dotenv.config();

const getAllUser = async (role) => {
  try {
    if (role !== "Admin") {
      return Promise.reject(Boom.unauthorized("You are not authorized to see this data"));
    }

    const allUser = await db.tb_user.findAll();

    if (_.isEmpty(allUser)) {
      return { message: "User is Empty" };
    }

    return Promise.resolve({
      statusCode: 200,
      message: "Get all user successfully!",
      data: allUser,
    });
  } catch (error) {
    console.log([fileName, "getAllUser", "ERROR"], { info: `${error}` });
    return Promise.reject(GeneralHelper.errorResponse(error));
  }
};

const getProfileUser = async (id) => {
  try {
    const isUser = await db.tb_user.findOne({
      where: {
        id,
      },
    });

    if (_.isEmpty(isUser)) {
      return Promise.reject(Boom.notFound("User not found!"));
    }

    return Promise.resolve({
      statusCode: 200,
      message: "Get profile user successfully!",
      data: isUser,
    });
  } catch (error) {
    console.log([fileName, "getProfileUser", "ERROR"], { info: `${error}` });
    return Promise.reject(GeneralHelper.errorResponse(error));
  }
};

const updateProfileUser = async (dataObject) => {
  const {
    id,
    email,
    fullName,
    ktpPassport,
    met,
    birthPlace,
    birthDate,
    nationality,
    address,
    province,
    city,
    posCode,
    telp,
    phone,
    lastEducation,
    signUpload,
    tuk,
    institution,
    company,
    fund,
    job,
    position,
    companyAddress,
    telpCompany,
    companyPosCode,
    fax,
    companyEmail,
  } = dataObject;

  try {
    const checkUser = await db.tb_user.findOne({
      where: {
        id,
      },
    });

    if (_.isEmpty(checkUser)) {
      return Promise.reject(Boom.badRequest("User with this id is doesn't exist!"));
    }

    await db.tb_user.update(
      {
        email: email || checkUser.dataValues.email,
        fullName: fullName || checkUser.dataValues.fullName,
        ktpPassport: ktpPassport || checkUser.dataValues.ktpPassport,
        met: met || checkUser.dataValues.met,
        birthPlace: birthPlace || checkUser.dataValues.birthPlace,
        birthDate: birthDate || checkUser.dataValues.birthDate,
        nationality: nationality || checkUser.dataValues.nationality,
        address: address || checkUser.dataValues.address,
        province: province || checkUser.dataValues.province,
        city: city || checkUser.dataValues.city,
        posCode: posCode || checkUser.dataValues.posCode,
        telp: telp || checkUser.dataValues.telp,
        phone: phone || checkUser.dataValues.phone,
        lastEducation: lastEducation || checkUser.dataValues.lastEducation,
        signUpload: signUpload || checkUser.dataValues.signUpload,
        tuk: tuk || checkUser.dataValues.tuk,
        institution: institution || checkUser.dataValues.institution,
        company: company || checkUser.dataValues.company,
        fund: fund || checkUser.dataValues.fund,
        job: job || checkUser.dataValues.job,
        position: position || checkUser.dataValues.position,
        companyAddress: companyAddress || checkUser.dataValues.companyAddress,
        telpCompany: telpCompany || checkUser.dataValues.telpCompany,
        companyPosCode: companyPosCode || checkUser.dataValues.companyPosCode,
        fax: fax || checkUser.dataValues.fax,
        companyEmail: companyEmail || checkUser.dataValues.companyEmail,
      },
      {
        where: {
          id,
        },
      }
    );

    return Promise.resolve({
      statusCode: 200,
      message: "Profile update successfully!",
    });
  } catch (error) {
    console.log([fileName, "updateProfileUser", "ERROR"], { info: `${error}` });
    return Promise.reject(GeneralHelper.errorResponse(error));
  }
};

const getKtpUser = async (pathKtp) => {
  try {
    if (pathKtp) {
      return Promise.resolve({
        statusCode: 200,
        message: "Get ktp user successfully!",
        data: pathKtp,
      });
    }

    return Promise.reject(Boom.notFound("Ktp not exist!"));
  } catch (error) {
    console.log([fileName, "getKtpUser", "ERROR"], { info: `${error}` });
    return Promise.reject(GeneralHelper.errorResponse(error));
  }
};

const changePassword = async (dataObject) => {
  const { oldPassword, newPassword, newPasswordConfirmation, id } = dataObject;

  try {
    const isUser = await db.tb_user.findOne({
      where: {
        id,
      },
    });

    if (_.isEmpty(isUser)) {
      return Promise.reject(
        Boom.badRequest("You are not authorized to change password this account!")
      );
    }

    const isOldPassCorrect = bcrPassword.__comparePassword(oldPassword, isUser.password);

    if (!isOldPassCorrect) {
      return Promise.reject(Boom.badRequest("Wrong old password!"));
    }

    if (oldPassword === newPassword) {
      return Promise.reject(Boom.badRequest("New Password Must be Different"));
    }

    if (newPassword !== newPasswordConfirmation) {
      return Promise.reject(Boom.badRequest("New Confirm Password Incorrect"));
    }

    const hashedPass = bcrPassword.__hashPassword(newPassword);

    await db.tb_user.update(
      {
        password: hashedPass,
      },
      {
        where: {
          id,
        },
      }
    );

    return Promise.resolve({
      statusCode: 200,
      message: "Password changed successfully!",
    });
  } catch (error) {
    console.log([fileName, "changePassword", "ERROR"], { info: `${error}` });
    return Promise.reject(GeneralHelper.errorResponse(error));
  }
};

const forgotPassword = async (dataObject) => {
  const { email } = dataObject;

  try {
    const isUser = await db.tb_user.findOne({
      where: {
        email,
      },
    });

    if (_.isEmpty(isUser)) {
      return Promise.reject(Boom.notFound("User not found!"));
    }

    const codeOtp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const expiryTime = new Date();
    expiryTime.setDate(expiryTime.getDate() + 1);

    await db.tb_token.create({
      email_user: email,
      token: codeOtp,
      expiryTime,
    });

    const mailOptions = {
      from: "raihanputromaulana477@gmail.com",
      to: email,
      subject: "Password Reset ENERGI MANDIRI",
      text: `Your password code otp is ${codeOtp}`,
    };

    await mailer.transporter.sendMail(mailOptions);

    return Promise.resolve({
      statusCode: 200,
      message: "Code otp sended!",
    });
  } catch (error) {
    console.log([fileName, "forgotPassword", "ERROR"], { info: `${error}` });
    return Promise.reject(GeneralHelper.errorResponse(error));
  }
};

module.exports = {
  getAllUser,
  getProfileUser,
  updateProfileUser,
  getKtpUser,
  changePassword,
  forgotPassword,
};
