import * as Yup from 'yup';
import Constants from './constants';

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

export const asesiProfileSchema = Yup.object().shape({
    fullname: Yup.string().required('Nama Lengkap tidak boleh kosong'),
    noKtpOrPassport: Yup.number().required(
        'No KTP / PASPOR tidak boleh kosong'
    ),
    birthPlace: Yup.string().required('Tempat Lahir tidak boleh kosong'),
    birthDate: Yup.string().required('Tanggal Lahir tidak boleh kosong'),
    gender: Yup.string()
        .oneOf(Constants.genderOptions.map((gender) => gender.key))
        .required('Jenis Kelamin tidak boleh kosong'),
    address: Yup.string().required('Alamat tidak boleh kosong'),
    province: Yup.string().required('Provinsi tidak boleh kosong'),
    city: Yup.string().required('Kota / Kabupaten tidak boleh kosong'),
    phone: Yup.number().required('No HP tidak boleh kosong'),
    email: Yup.string().required('Email tidak boleh kosong'),
    lastEducation: Yup.string()
        .oneOf(Constants.educationOptions.map((education) => education.key))
        .required('Pendidikan Terakhir tidak boleh kosong'),
    signUpload: Yup.mixed<File>()
        .required('Tanda Tangan tidak boleh kosong')
        .test(
            'fileSize',
            'Ukuran file terlalu besar. Maksimal 5MB',
            (value: File) => value.size <= 5242880
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
