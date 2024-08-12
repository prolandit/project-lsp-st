/* eslint-disable @typescript-eslint/no-explicit-any */

export type TukValues = {
    nama_tuk: string;
    alamat: string;
    tipe_tuk: string;
};

export type AssesmentSchedulePayload = {
    id: number;
    status: string;
    eventName: string;
    startDate: Date;
    tuk: string;
    asesor: string;
};

export type AssesmentDataPayload = {
    id: number;
    eventName: string;
    role: string;
    address: string;
    praAssesmentDate: Date;
    assesmentDate: Date;
    virtualMeetLink: string;
    tukName: string;
    schema: string;
    status: string;
};

export type LoginValues = {
    email: string;
    password: string;
};
export type RegisterValues = {
    fullName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

export type CreateUserValues = {
    fullName: string;
    email: string;
    password: string;
    role: string;
};

export type ErrorResponse = {
    statusCode: number;
    error: string;
    message: string;
};

export type metaPayload = {
    total: number,
}

export type getUserALl = {
    data: UserPayload[];
    meta: metaPayload;
};

export type getTukALl = {
    data: TukPayload[];
    meta: metaPayload;
};

// export type AsesiProfileValues = {
//     [key: string]: any;
//     fullName?: string;
//     ktpPassport?: string;
//     birthPlace?: string;
//     birthDate?: string;
//     gender?: string;
//     nationality?: string;
//     address?: string;
//     province?: string;
//     city?: string;
//     posCode?: string;
//     telp?: string;
//     phone?: string;
//     email?: string;
//     lastEducation?: string;
//     signUpload?: File;
//     signExplanation?: string;
//     tuk?: string;
//     institution?: string;
//     company?: string;
//     fund?: string;
//     job?: string;
//     position?: string;
//     companyAddress?: string;
//     telpCompany?: string;
//     companyPosCode?: string;
//     fax?: string;
//     companyEmail?: string;
// };

// export type AsesorProfileValues = {
//     [key: string]: any;
//     fullName: string;
//     ktpPassport: string;
//     noMet: string;
//     birthPlace: string;
//     birthDate: string;
//     gender: string;
//     nationality: string;
//     address: string;
//     province: string;
//     city: string;
//     posCode: string;
//     telp: string;
//     phone: string;
//     email: string;
//     lastEducation: string;
//     signUpload?: File;
//     signExplanation: string;
// };

export type UserValues = {
    [key: string]: any;
    role?: string;
    foto?: File;
    tempatLahir?: string;
    tanggalLahir?: string;
    username?: string;
    email?: string;
    jenisKelamin?: string;
    namaLengkap?: string;
    agama?: string;
    nik?: string;
    noTelp?: string;
    alamat?: string;
    tandaTangan?: File;
};

export type AsesorValues = {
    [key: string]: any;
    role?: string;
    foto?: File;
    nama?: string;
    email?: string;
    nik?: string;
    alamat?: string;
    tanggalLahir?: string;
    tempatLahir?: string;
    jenisKelamin?: string;
    agama?: string;
    phone?: string;
    tandaTangan?: File;
    no_registrasi?: string;
};

export type ChangePasswordValues = {
    oldPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;
};

export type OptionType = {
    key: string;
    value: string;
    label: string;
};

export type FileUpload = {
    fileUpload: File | null;
    explanation: string;
};

export type Position = {
    x: number;
    y: number;
};

export type UserPayload = {
    id: number;
    foto?: string;
    tempatLahir?: string;
    tanggalLahir?: string;
    username?: string;
    email?: string;
    jenisKelamin?: string;
    namaLengkap?: string;
    agama?: string;
    nik?: string;
    noTelp?: string;
    alamat?: string;
    tandaTangan?: File;
    role: string;
    nameLengkap: string;
};

export type TukPayload = {
    id: number;
    nama_tuk: string;
    tipe_tuk: string;
    alamat: string;
};

export type AsesorPayload = {
    id: number;
    foto: string;
    noRegistration: string;
    nameLengkap: string;
};

export type MenuType = {
    name: string;
    path: string;
    icon: React.ReactNode;
    children?: MenuType[];
};
