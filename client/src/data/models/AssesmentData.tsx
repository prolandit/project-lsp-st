import { AssesmentDataPayload } from '../../common/types';

export default class AssesmentData {
    public id: number;
    public eventName: string;
    public role: string;
    public address: string;
    public praAssesmentDate: Date;
    public assesmentDate: Date;
    public virtualMeetLink: string;
    public tukName: string;
    public schema: string;
    public status: string;

    constructor(payload: AssesmentDataPayload) {
        this.id = payload.id;
        this.eventName = payload.eventName;
        this.role = payload.role;
        this.address = payload.address;
        this.praAssesmentDate = payload.praAssesmentDate;
        this.assesmentDate = payload.assesmentDate;
        this.virtualMeetLink = payload.virtualMeetLink;
        this.tukName = payload.tukName;
        this.schema = payload.schema;
        this.status = payload.status;
    }
}
