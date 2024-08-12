import { AsesorPayload } from '../../common/types';

export default class Asesor {
    public id: number;
    public foto: string;
    public noRegistration: string;
    public nameLengkap: string;

    constructor(payload: AsesorPayload) {
        this.id = payload.id;
        this.foto = payload.foto;
        this.noRegistration = payload.noRegistration;
        this.nameLengkap = payload.nameLengkap;
    }
}
