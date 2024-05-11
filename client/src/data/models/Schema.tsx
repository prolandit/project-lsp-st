import { SchemaPayload } from '../../common/types';

export default class Schema {
    public id: number;
    public name: string;

    constructor(payload: SchemaPayload) {
        this.id = payload.id;
        this.name = payload.name;
    }
}
