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

export type ErrorResponse = {
    statusCode: number;
    error: string;
    message: string;
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
    signExplanation: string;
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

export type LoginType = {
    email: string;
    password: string;
};

export type RegisterType = {
    email: string;
    fullName: string;
    password: string;
    role: string;
};

export type UserType = {
    id?: number;
    email?: string;
    fullName?: string;
    role?: string;
    ktpPassport?: string;
    met?: string;
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
