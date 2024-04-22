import { AssesmentSchedulePayload } from '../../common/types';

export default class AssesmentSchedule {
    public id: number;
    public status: string;
    public eventName: string;
    public startDate: Date;
    public tuk: string;
    public asesor: string;

    constructor(payload: AssesmentSchedulePayload) {
        this.id = payload.id;
        this.status = payload.status;
        this.eventName = payload.eventName;
        this.startDate = payload.startDate;
        this.tuk = payload.tuk;
        this.asesor = payload.asesor;
    }
}
