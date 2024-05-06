import { AssesmentPayload } from '../../common/types';

export default class Assesment {
    public id: number;
    public eventName: string;
    public role: string;
    public address: string;
    public praAssesmentDate: Date;
    public assesmentDate: Date;
    public praAssesmentMeetLink: string;
    public assesmentMeetLink: string;
    public plenoMeetLink: string;
    public tukName: string;
    public schema: string;
    public status: string;

    constructor(payload: AssesmentPayload) {
        this.id = payload.id;
        this.eventName = payload.eventName;
        this.role = payload.role;
        this.address = payload.address;
        this.praAssesmentDate = payload.praAssesmentDate;
        this.assesmentDate = payload.assesmentDate;
        this.praAssesmentMeetLink = payload.praAssesmentMeetLink;
        this.assesmentMeetLink = payload.assesmentMeetLink;
        this.plenoMeetLink = payload.plenoMeetLink;
        this.tukName = payload.tukName;
        this.schema = payload.schema;
        this.status = payload.status;
    }
}
