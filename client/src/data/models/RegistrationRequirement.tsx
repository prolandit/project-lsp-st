import { RegistrationRequirementPayload } from '../../common/types';
import Schema from './Schema';

export default class RegistrationRequirement {
    public id: number;
    public name: string;
    public formType: string;
    public formCode: string;
    public schema: Schema;
    public mandatory: boolean;
    public showOnAsesorAt: string;
    public showOnAsesiAt: string;
    public organizer: string;
    public validator: string;

    constructor(payload: RegistrationRequirementPayload) {
        this.id = payload.id;
        this.name = payload.name;
        this.formType = payload.formType;
        this.formCode = payload.formCode;
        this.schema = new Schema(payload.schema);
        this.mandatory = payload.mandatory;
        this.showOnAsesorAt = payload.showOnAsesorAt;
        this.showOnAsesiAt = payload.showOnAsesiAt;
        this.organizer = payload.organizer;
        this.validator = payload.validator;
    }
}
