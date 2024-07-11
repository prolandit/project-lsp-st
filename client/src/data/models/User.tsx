import { UserPayload } from '../../common/types';

export default class User {
    public id: number;
    public email: string;
    public username: string;
    public foto: string;
    public name: string;
    public role: string;
    // public birthPlace: string;
    // public birthDate: Date;
    // public gender: string;
    // public religion: string;
    // public nik: string;
    // public address: string;
    // public phone: string;
    // public sign: string;
    // public signExplanation: string;

    constructor(payload: UserPayload) {
        this.id = payload.id;
        this.email = payload.email;
        this.username = payload.username;
        this.foto = payload.foto;
        this.name = payload.name;
        this.role = payload.role;
        // this.birthPlace = payload.birthPlace;
        // this.birthDate = payload.birthDate;
        // this.gender = payload.gender;
        // this.religion = payload.religion;
        // this.nik = payload.nik;
        // this.address = payload.address;
        // this.phone = payload.phone;
        // this.sign = payload.sign;
        // this.signExplanation = payload.signExplanation;
    }
}
