const Router = require('express').Router();

const UserHelper = require('../helpers/userHelper');
const GeneralHelper = require('../helpers/generalHelper');
const ValidationHelper = require('../helpers/validationHelper');
const AuthMiddleware = require('../middlewares/authMiddleware');
const { uploadImg } = require('../middlewares/uploadMiddleware');

const fileName = 'server/api/user.js';  

const allUser = async ( req, rep ) => {
    try {
        const role = req.body.dataToken.role;

        const response = await UserHelper.getAllUser(role);

        return rep.send(response);
    } catch (error) {
        console.log([fileName, 'allUser', 'ERROR'], { info: `${error}` });
        return rep.send(GeneralHelper.errorResponse(error));    
    }
}

const profile = async ( req, rep ) => {
    try {
        const id = req.body.dataToken.id;

        const response = await UserHelper.getProfileUser(id);

        return rep.send(response);
    } catch (error) {
        console.log([fileName, 'profile', 'ERROR'], { info: `${error}` });
        return rep.send(GeneralHelper.errorResponse(error));    
    }
}

const updateProfile = async ( req, rep ) => {
    try {
        const id = req.body.dataToken.id;

        const { email, fullName, ktpPassport, met,  birthPlace,  birthDate,  nationality,  address,  province,  city,  posCode,  telp,  phone,  lastEducation,  tuk,  institution,  company, fund,  job,  position, companyAddress, telpCompany,  companyPosCode, fax, companyEmail } = req.body;

        const url = req.protocol + '://' + req.get('host');

        const imgFile = req.files.signUpload?.[0];

        const fileName = imgFile ? imgFile.originalname : '';
        
        const signUpload = fileName ? url + '/' + fileName : '';

        const response = await UserHelper.updateProfileUser({id, email, fullName, ktpPassport, met,  birthPlace,  birthDate,  nationality,  address,  province,  city,  posCode,  telp,  phone,  lastEducation, signUpload,  tuk,  institution,  company, fund,  job,  position, companyAddress, telpCompany,  companyPosCode, fax, companyEmail });

        return rep.send(response);
    } catch (error) {
        console.log([fileName, 'updateProfile', 'ERROR'], { info: `${error}` });
        return rep.send(GeneralHelper.errorResponse(error));    
    }
}

const changePassword = async ( req, rep ) => {
    try {
        ValidationHelper.changePassValidation(req.body);

        const id = req.body.dataToken.id;
        const { oldPassword, newPassword, newPasswordConfirmation } = req.body;

        const response = await UserHelper.changePassword({ oldPassword, newPassword, newPasswordConfirmation, id });

        return rep.send(response);
    } catch (error) {
        console.log([fileName, 'changePassword', 'ERROR'], { info: `${error}` });
        return rep.send(GeneralHelper.errorResponse(error));    
    }
}

Router.get('/all', AuthMiddleware.validateToken, allUser);
Router.get('/profile', AuthMiddleware.validateToken, profile);
Router.patch('/update', uploadImg.fields([{name: 'signUpload', maxCount: 1}]), AuthMiddleware.validateToken, updateProfile)
Router.patch('/change-password', AuthMiddleware.validateToken, changePassword);

module.exports = Router;