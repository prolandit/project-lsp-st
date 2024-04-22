import { TukPayload } from '../../common/types';

export default class Tuk {
    public id: number;
    public name: string;
    public code: string;
    public type: string;
    public validDate: Date;
    public areaAddress: string;
    public address: string;

    constructor(payload: TukPayload) {
        this.id = payload.id;
        this.name = payload.name;
        this.code = payload.code;
        this.type = payload.type;
        this.validDate = payload.validDate;
        this.areaAddress = payload.areaAddress;
        this.address = payload.address;
    }
}
