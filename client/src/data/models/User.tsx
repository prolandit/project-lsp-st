import { UserPayload } from '../../common/types';

export default class User {
    public id: number;
    public photo: string;
    public role: string;
    public birthPlace: string;
    public birthDate: Date;
    public username: string;
    public email: string;
    public gender: string;
    public fullName: string;
    public religion: string;
    public nik: string;
    public address: string;
    public phone: string;
    public sign: string;
    public signExplanation: string;

    constructor(payload: UserPayload) {
        this.id = payload.id;
        this.photo = payload.photo;
        this.role = payload.role;
        this.birthPlace = payload.birthPlace;
        this.birthDate = payload.birthDate;
        this.username = payload.username;
        this.email = payload.email;
        this.gender = payload.gender;
        this.fullName = payload.fullName;
        this.religion = payload.religion;
        this.nik = payload.nik;
        this.address = payload.address;
        this.phone = payload.phone;
        this.sign = payload.sign;
        this.signExplanation = payload.signExplanation;
    }
}
