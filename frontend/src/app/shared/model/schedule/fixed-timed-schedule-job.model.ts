import { AbstractScheduleJob } from './abstract-schedule-job.model';

export class FixedTimeScheduleJob extends AbstractScheduleJob {
  constructor(
    public time: Date,
  ) {}
}
