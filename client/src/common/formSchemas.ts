import * as Yup from 'yup';
import Constants from './constants';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
    password: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .max(20, 'Password maksimal 20 karakter')
        .required('Password tidak boleh kosong'),
});

export const registerSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
    fullName: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    password: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .required('Password tidak boleh kosong'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Password tidak sama')
        .required('Konfirmasi Password tidak boleh kosong'),
});

export const userInputSchema = Yup.object().shape({
    photo: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .required('Foto Profil harus diisi'),
    role: Yup.string().required('Peran tidak boleh kosong'),
    username: Yup.string().required('Username tidak boleh kosong'),
    fullName: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    religion: Yup.string().required('Agama tidak boleh kosong'),
    nik: Yup.string()
        .length(16, 'NIK harus terdiri dari 16 karakter')
        .matches(/^[0-9]+$/, 'NIK hanya boleh terdiri dari angka')
        .required('NIK tidak boleh kosong'),
    birthPlace: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    birthDate: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    gender: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.value))
        .required('Jenis Kelamin tidak boleh kosong'),
    address: Yup.string().required('Alamat tidak boleh kosong'),
    phone: Yup.number().required('No HP tidak boleh kosong'),
    email: Yup.string().required('Email tidak boleh kosong'),
    signExplanation: Yup.string(),
    signUpload: Yup.mixed<File>()
        .when('signExplanation', {
            is: (explanation: string) =>
                !explanation || explanation.trim().length === 0,
            then: (schema) => schema.required('Tanda Tangan harus diisi'),
        })
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        ),
});

export const userEditSchema = Yup.object().shape({
    photo: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .optional(),
    role: Yup.string().optional(),
    username: Yup.string().optional(),
    fullName: Yup.string().optional(),
    religion: Yup.string().optional(),
    nik: Yup.string()
        .length(16, 'NIK harus terdiri dari 16 karakter')
        .matches(/^[0-9]+$/, 'NIK hanya boleh terdiri dari angka')
        .optional(),
    birthPlace: Yup.string().optional(),
    birthDate: Yup.string().optional(),
    gender: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.value))
        .optional(),
    address: Yup.string().optional(),
    phone: Yup.number().optional(),
    email: Yup.string().optional(),
    signExplanation: Yup.string(),
    signUpload: Yup.mixed<File>()
        .when('signExplanation', {
            is: (explanation: string) =>
                !explanation || explanation.trim().length === 0,
            then: (schema) => schema.required('Tanda Tangan harus diisi'),
        })
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        ),
});

export const tukInputSchema = Yup.object().shape({
    name: Yup.string().required('Nama TUK harus diisi'),
    code: Yup.string().required('Kode TUK harus diisi'),
    type: Yup.string().required('Tipe TUK harus diisi'),
    validDate: Yup.date().required('Tanggal Berlaku harus diisi'),
    areaAddress: Yup.string().required('Alamat Wilayah harus diisi'),
    address: Yup.string().required('Alamat harus diisi'),
});

export const tukEditSchema = Yup.object().shape({
    name: Yup.string().optional(),
    code: Yup.string().optional(),
    type: Yup.string().optional(),
    validDate: Yup.date().optional(),
    areaAddress: Yup.string().optional(),
    address: Yup.string().optional(),
});

export const fileInputSchema = Yup.object().shape({
    fileUpload: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .nullable(),
    explanation: Yup.string().when('fileUpload', {
        is: (fileUpload: File | undefined) => !fileUpload,
        then: (schema) => schema.required('Keterangan harus diisi'),
    }),
});

export const changePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .max(20, 'Password maksimal 20 karakter')
        .required('Password lama tidak boleh kosong'),
    newPassword: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .max(20, 'Password maksimal 20 karakter')
        .required('Password baru tidak boleh kosong'),
    newPasswordConfirmation: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Password tidak sama')
        .required('Konfirmasi Password tidak boleh kosong'),
});

export const createNewUserSchema = Yup.object().shape({
    fullName: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
    password: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .max(20, 'Password maksimal 20 karakter')
        .required('Password tidak boleh kosong'),
    role: Yup.string()
        .oneOf(Constants.dummyRoles.map((role) => role.value))
        .required('Role tidak boleh kosong'),
});
