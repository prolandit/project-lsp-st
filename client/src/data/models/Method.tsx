import { MethodPayload } from '../../common/types';

export default class Method {
    public id: number;
    public name: string;

    constructor(payload: MethodPayload) {
        this.id = payload.id;
        this.name = payload.name;
    }
}
