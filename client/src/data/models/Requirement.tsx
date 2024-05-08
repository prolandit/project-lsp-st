import { RequirementPayload } from '../../common/types';

export default class Requirement {
    public id: number;
    public name: string;
    public formType: string;
    public mandatory: boolean;
    public showOnAsesorAt: string;
    public showOnAsesiAt: string;

    constructor(payload: RequirementPayload) {
        this.id = payload.id;
        this.name = payload.name;
        this.formType = payload.formType;
        this.mandatory = payload.mandatory;
        this.showOnAsesorAt = payload.showOnAsesorAt;
        this.showOnAsesiAt = payload.showOnAsesiAt;
    }
}
