/* eslint-disable @typescript-eslint/no-explicit-any */

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

export type AsesiProfileValues = {
    [key: string]: any;
    fullName?: string;
    ktpPassport?: string;
    birthPlace?: string;
    birthDate?: string;
    gender?: string;
    nationality?: string;
    address?: string;
    province?: string;
    city?: string;
    posCode?: string;
    telp?: string;
    phone?: string;
    email?: string;
    lastEducation?: string;
    signUpload?: File;
    signExplanation?: string;
    tuk?: string;
    institution?: string;
    company?: string;
    fund?: string;
    job?: string;
    position?: string;
    companyAddress?: string;
    telpCompany?: string;
    companyPosCode?: string;
    fax?: string;
    companyEmail?: string;
};

export type AsesorProfileValues = {
    [key: string]: any;
    fullName: string;
    ktpPassport: string;
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
    signExplanation: string;
};

export type ChangePasswordValues = {
    oldPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;
};

export type OptionType = {
    key: string;
    value: string;
};

export type FileUpload = {
    fileUpload: File | null;
    explanation: string;
};

export type Position = {
    x: number;
    y: number;
};

export type UserType = {
    id?: number;
    email?: string;
    fullName?: string;
    role?: string;
    ktpPassport?: string;
    met?: string;
    gender?: string;
    birthPlace?: string;
    birthDate?: string;
    nationality?: string;
    address?: string;
    province?: string;
    city?: string;
    posCode?: string;
    telp?: string;
    phone?: string;
    lastEducation?: string;
    signUpload?: string;
    tuk?: string;
    institution?: string;
    company?: string;
    fund?: string;
    job?: string;
    position?: string;
    companyAddress?: string;
    telpCompany?: string;
    companyPosCode?: string;
    fax?: string;
    companyEmail?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type MenuType = {
    name: string;
    path: string;
    icon: React.ReactNode;
    children?: MenuType[];
};
