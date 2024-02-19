import * as Yup from 'yup';
import Constants from './constants';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
    password: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .max(20, 'Password maximal 20 karakter')
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
        .min(6, 'Password minimal 6 karakter')
        .max(20, 'Password maximal 20 karakter')
        .required('Konfirmasi Password tidak boleh kosong'),
});

export const asesiProfileSchema = Yup.object().shape({
    fullName: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    noKtpOrPassport: Yup.number().required(
        'No KTP / PASPOR tidak boleh kosong'
    ),
    birthPlace: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    birthDate: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    gender: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.key))
        .required('Jenis Kelamin tidak boleh kosong'),
    nationality: Yup.string().required('Kebangsaan tidak boleh kosong'),
    address: Yup.string().required('Alamat tidak boleh kosong'),
    province: Yup.string().required('Provinsi tidak boleh kosong'),
    city: Yup.string().required('Kota / Kabupaten tidak boleh kosong'),
    posCode: Yup.string().required('Kode Pos tidak boleh kosong'),
    phone: Yup.number().required('No HP tidak boleh kosong'),
    email: Yup.string().required('Email tidak boleh kosong'),
    lastEducation: Yup.string()
        .oneOf(Constants.educationOptions.map((education) => education.key))
        .required('Pendidikan Terakhir tidak boleh kosong'),
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
    tuk: Yup.string()
        .oneOf(Constants.listTuk.map((tuk) => tuk.key))
        .required('TUK tidak boleh kosong'),
    institution: Yup.string()
        .oneOf(Constants.institutions.map((institution) => institution.key))
        .required('Nama Lembaga/Badan tidak boleh kosong'),
    company: Yup.string().required('Nama Perusahaan tidak boleh kosong'),
    fund: Yup.string()
        .oneOf(Constants.funds.map((fund) => fund.key))
        .required('Sumber Dana tidak boleh kosong'),
    job: Yup.string()
        .oneOf(Constants.jobs.map((job) => job.key))
        .required('Pekerjaan tidak boleh kosong'),
    position: Yup.string().required('Posisi tidak boleh kosong'),
    companyAddress: Yup.string().required('Alamat Kantor tidak boleh kosong'),
});

export const asesorProfileSchema = Yup.object().shape({
    fullName: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    noKtpOrPassport: Yup.number().required(
        'No KTP / PASPOR tidak boleh kosong'
    ),
    noMet: Yup.string().required('No MET tidak boleh kosong'),
    birthPlace: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    birthDate: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    gender: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.key))
        .required('Jenis Kelamin tidak boleh kosong'),
    address: Yup.string().required('Alamat tidak boleh kosong'),
    province: Yup.string().required('Provinsi tidak boleh kosong'),
    city: Yup.string().required('Kota / Kabupaten tidak boleh kosong'),
    posCode: Yup.string().required('Kode Pos tidak boleh kosong'),
    phone: Yup.number().required('No HP tidak boleh kosong'),
    email: Yup.string().required('Email tidak boleh kosong'),
    lastEducation: Yup.string()
        .oneOf(Constants.educationOptions.map((education) => education.key))
        .required('Pendidikan Terakhir tidak boleh kosong'),
    signUpload: Yup.mixed<File>()
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File | undefined) => !value || value.size <= 5242880
        )
        .nullable(),
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
