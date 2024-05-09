import { AdministrativeEvidencePayload } from '../../common/types';
import Schema from './Schema';

export default class AdministrativeEvidence {
    public id: number;
    public schema: Schema;
    public proofUrl: string;

    constructor(payload: AdministrativeEvidencePayload) {
        this.id = payload.id;
        this.schema = new Schema(payload.schema);
        this.proofUrl = payload.proofUrl;
    }
}
