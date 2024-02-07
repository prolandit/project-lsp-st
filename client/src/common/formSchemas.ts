import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
    password: Yup.string().required('Password tidak boleh kosong'),
});

export const registerSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
    fullname: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    password: Yup.string().required('Password tidak boleh kosong'),
    passwordConfirmation: Yup.string().required(
        'Konfirmasi Password tidak boleh kosong'
    ),
});
