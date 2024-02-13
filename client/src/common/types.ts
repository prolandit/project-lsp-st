import { NotificationArgsProps } from 'antd';

export type NotificationPlacement = NotificationArgsProps['placement'];

export type LoginValues = {
    email: string;
    password: string;
};
export type RegisterValues = {
    fullname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
};

export type LoggedUser = {
    email: string;
    fullname: string;
    role: string;
    password: string;
};

export type AsesiProfileValues = {
    fullname: string;
    noKtpOrPassport: string;
    birthPlace: string;
    birthDate: string;
    gender: string;
    nationality: string;
    address: string;
    province: string;
    city: string;
    posCode: string;
    telp: string;
    phone: string;
    email: string;
    lastEducation: string;
    signUpload?: File;
    signExplanation: string;
    tuk: string;
    institution: string;
    company: string;
    fund: string;
    job: string;
    position: string;
    companyAddress: string;
    telpCompany: string;
    companyPosCode: string;
    fax: string;
    companyEmail: string;
};

export type AsesorProfileValues = {
    fullname: string;
    noKtpOrPassport: string;
    noMet: string;
    birthPlace: string;
    birthDate: string;
    gender: string;
    nationality: string;
    address: string;
    province: string;
    city: string;
    posCode: string;
    telp: string;
    phone: string;
    email: string;
    lastEducation: string;
    signUpload?: File;
};

export type OptionType = {
    key: string;
    value: string;
};

export type FileUpload = {
    fileUpload: File | null;
    explanation: string;
};
