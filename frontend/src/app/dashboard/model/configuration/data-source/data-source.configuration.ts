import { MetricCalculation } from './metric-calculation.enum';
import { MetricDataType } from './metric-data-type.enum';
import { MetricTimeSpan } from './metric-time-span.enum';

export class DataSourceConfiguration {

  public calculation: MetricCalculation;
  public dataType: MetricDataType;
  public timeSpan: MetricTimeSpan;

  constructor() {
    this.calculation = MetricCalculation.AVERAGE;
    this.dataType = MetricDataType.TEMPERATURE;
    this.timeSpan = MetricTimeSpan.DAILY;
  }

}
