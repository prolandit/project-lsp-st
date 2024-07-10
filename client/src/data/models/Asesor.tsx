import { AsesorPayload } from '../../common/types';

export default class Asesor {
    public id: number;
    public photo: string;
    public noRegAsesor: string;
    public name: string;
    public telp?: string;

    constructor(payload: AsesorPayload) {
        this.id = payload.id;
        this.photo = payload.photo;
        this.noRegAsesor = payload.noRegAsesor;
        this.name = payload.name;
        this.telp = payload.telp;
    }
}
