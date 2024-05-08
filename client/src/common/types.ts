/* eslint-disable @typescript-eslint/no-explicit-any */

export type RouteParam = {
    path: string;
    element: ReturnType<React.FC>;
    children?: RouteParam[];
};

export type AssesmentSchedulePayload = {
    id: number;
    status: string;
    eventName: string;
    startDate: Date;
    tuk: string;
    asesor: string;
};

export type AssesmentPayload = {
    id: number;
    eventName: string;
    role: string;
    address: string;
    praAssesmentDate: Date;
    assesmentDate: Date;
    praAssesmentMeetLink: string;
    assesmentMeetLink: string;
    plenoMeetLink: string;
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
    met?: string;
    photo?: File;
    role?: string;
    birthPlace?: string;
    birthDate?: string;
    username?: string;
    password?: string;
    email?: string;
    gender?: string;
    fullName?: string;
    religion?: string;
    nik?: string;
    address?: string;
    phone?: string;
    education?: string;
    position?: string;
    job?: string;
    signUpload?: File;
    signExplanation?: string;
};

export type TukValues = {
    name: string;
    code: string;
    type: string;
    validDate: string;
    areaAddress: string;
    address: string;
};

export type AssesmentValues = {
    eventName: string;
    schemaName: string;
    scheduleCode: string;
    schemaLicense: string;
    method: string;
    tuk: string;
    verificator: string;
    isVerified: boolean;
    tukCoordinator: string;
    praAssesmentDate: string;
    startDate: string;
    endDate: string;
    praAssesmentMeetLink: string;
    assesmentMeetLink: string;
    plenoMeetLink: string;
    tukAddress: string;
    note: string;
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

export type UserPayload = {
    id: number;
    met?: string;
    photo: string;
    role: string;
    birthPlace: string;
    birthDate: Date;
    username: string;
    email: string;
    gender: string;
    fullName: string;
    religion: string;
    nik: string;
    address?: string;
    phone: string;
    education?: string;
    position?: string;
    job?: string;
    sign: string;
    signExplanation: string;
};

export type TukPayload = {
    id: number;
    name: string;
    code: string;
    type: string;
    validDate: Date;
    areaAddress: string;
    address: string;
};

export type RequirementPayload = {
    id: number;
    name: string;
    formType: string;
    mandatory: boolean;
    showOnAsesorAt: string;
    showOnAsesiAt: string;
};

export type RequirementValues = {
    name: string;
    formType: string;
    mandatory: boolean;
    showOnAsesorAt: string;
    showOnAsesiAt: string;
};

export type MenuType = {
    name: string;
    path: string;
    icon: React.ReactNode;
    children?: MenuType[];
};
