import { AbstractScheduleJob } from './abstract-schedule-job.model';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';

export class FixedTimeScheduleJob extends AbstractScheduleJob {
  constructor(
    public id: number,
    public component: RPiComponent,
    public enable: boolean,
    public time: Date,
  ) {
    super(id, component, enable);
  }
}
