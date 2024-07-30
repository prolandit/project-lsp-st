import { UserPayload } from '../../common/types';

export default class User {
    public id: number;
    public foto?: string;
    public tempatLahir?: string;
    public tanggalLahir?: string;
    public username?: string;
    public email?: string;
    public jenisKelamin?: string;
    public agama?: string;
    public nik?: string;
    public noTelp?: string;
    public alamat?: string;
    public tandaTangan?: File;
    public role: string;
    public name: string;

    constructor(payload: UserPayload) {
        this.id = payload.id;
        this.foto = payload.foto;
        this.tempatLahir = payload.tempatLahir;
        this.tanggalLahir = payload.tanggalLahir;
        this.username = payload.username;
        this.email = payload.email;
        this.jenisKelamin = payload.jenisKelamin;
        this.agama = payload.agama;
        this.nik = payload.nik;
        this.noTelp = payload.noTelp;
        this.alamat = payload.alamat;
        this.tandaTangan = payload.tandaTangan;
        this.role = payload.role;
        this.name = payload.name;
    }
}
