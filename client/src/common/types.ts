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

export type ProfileValues = {
    fullname: string;
    noKtpOrPassport: string;
    birthPlace: string;
    birthDate: string;
    genre: string;
    nationality: string;
    address: string;
    province: string;
    city: string;
    posCode: string;
    telp: string;
    phone: string;
    email: string;
    lastEducation: string;
    signUpload?: File | undefined;
    tuk: string;
};

export type OptionType = {
    key: string;
    value: string;
};
