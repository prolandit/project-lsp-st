import { TukPayload } from '../../common/types';

export default class Tuk {
    public id: number;
    public nama_tuk: string;
    public tipe_tuk: string;
    public alamat: string;

    constructor(payload: TukPayload) {
        this.id = payload.id;
        this.nama_tuk = payload.nama_tuk;
        this.tipe_tuk = payload.tipe_tuk;
        this.alamat = payload.alamat;
    }
}
