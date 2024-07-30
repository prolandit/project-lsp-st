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
    foto: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .required('Foto Profil harus diisi'),
    tempatLahir: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    tanggalLahir: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    username: Yup.string().required('Username tidak boleh kosong'),
    jenisKelamin: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.value))
        .required('Jenis Kelamin tidak boleh kosong'),
    namaLengkap: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    agama: Yup.string().required('Agama tidak boleh kosong'),
    nik: Yup.string()
        .length(16, 'NIK harus terdiri dari 16 karakter')
        .matches(/^[0-9]+$/, 'NIK hanya boleh terdiri dari angka')
        .required('NIK tidak boleh kosong'),
    noTelp: Yup.number().required('No HP tidak boleh kosong'),
    alamat: Yup.string().required('Alamat tidak boleh kosong'),
    email: Yup.string().required('Email tidak boleh kosong'),
    tandaTangan: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .required('Tanda tangan harus diisi'),
});

export const userEditSchema = Yup.object().shape({
    foto: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .required('Foto Profil harus diisi'),
    tempatLahir: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    tanggalLahir: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    email: Yup.string().required('Email tidak boleh kosong'),
    username: Yup.string().required('Username tidak boleh kosong'),
    namaLengkap: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    agama: Yup.string().required('Agama tidak boleh kosong'),
    nik: Yup.string()
        .length(16, 'NIK harus terdiri dari 16 karakter')
        .matches(/^[0-9]+$/, 'NIK hanya boleh terdiri dari angka')
        .required('NIK tidak boleh kosong'),
    noTelp: Yup.number().required('No HP tidak boleh kosong'),
    tandaTangan: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .required('Tanda tangan harus diisi'),
    role: Yup.string().required('Peran tidak boleh kosong'),
});

export const tukInputSchema = Yup.object().shape({
    nama_tuk: Yup.string().required('Nama TUK harus diisi'),
    alamat: Yup.string().required('Alamat harus diisi'),
    tipe_tuk: Yup.string().required('Tipe TUK harus diisi'),
});

export const tukEditSchema = Yup.object().shape({
    nama_tuk: Yup.string().optional(),
    alamat: Yup.string().optional(),
    tipe_tuk: Yup.string().optional(),
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

export const AsesorInputSchema = Yup.object().shape({
    foto: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .optional(),
    nama: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    nik: Yup.string()
        .length(16, 'NIK harus terdiri dari 16 karakter')
        .matches(/^[0-9]+$/, 'NIK hanya boleh terdiri dari angka')
        .required('NIK tidak boleh kosong'),
    alamat: Yup.string().required('Alamat tidak boleh kosong'),
    tempatLahir: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    tanggalLahir: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    jenisKelamin: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.value))
        .required('Jenis Kelamin tidak boleh kosong'),
    agama: Yup.string().required('Agama tidak boleh kosong'),
    phone: Yup.number().required('No HP tidak boleh kosong'),
    no_registrasi: Yup.number().required('No registrasi tidak boleh kosong'),
    tandaTangan: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .optional(),
});
