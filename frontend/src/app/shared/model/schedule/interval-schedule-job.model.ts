import { AbstractScheduleJob } from './abstract-schedule-job.model';
import { FrequencyMetric } from './frequency-metric.enum';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';

export class IntervalScheduleJob extends AbstractScheduleJob {
  constructor(
    public id: number,
    public component: RPiComponent,
    public enable: boolean,
    public frequency: number,
    public metric: FrequencyMetric
  ) {
    super(id, component, enable);
  }
}
