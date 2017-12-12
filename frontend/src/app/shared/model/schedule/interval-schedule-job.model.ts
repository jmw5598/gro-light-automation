import { AbstractScheduleJob } from './abstract-schedule-job.model';
import { FrequencyMetric } from './frequency-metric.enum';

export class IntervalScheduleJob extends AbstractScheduleJob {
  constructor(
    public frequency: number,
    public metric: FrequencyMetric
  ) {}
}
