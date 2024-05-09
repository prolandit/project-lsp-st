import { MukPayload } from '../../common/types';
import Method from './Method';
import Schema from './Schema';

export default class Muk {
    public id: number;
    public name: string;
    public formType: string;
    public formCode: string;
    public schema: Schema;
    public method: Method;
    public mandatory: boolean;
    public showOnAsesorAt: string;
    public showOnAsesiAt: string;
    public organizer: string;
    public validator: string;

    constructor(payload: MukPayload) {
        this.id = payload.id;
        this.name = payload.name;
        this.formType = payload.formType;
        this.formCode = payload.formCode;
        this.schema = new Schema(payload.schema);
        this.method = new Method(payload.method);
        this.mandatory = payload.mandatory;
        this.showOnAsesorAt = payload.showOnAsesorAt;
        this.showOnAsesiAt = payload.showOnAsesiAt;
        this.organizer = payload.organizer;
        this.validator = payload.validator;
    }
}
