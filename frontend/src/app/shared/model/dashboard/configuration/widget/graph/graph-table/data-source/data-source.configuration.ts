import { MetricCalculation } from './metric-calculation.enum';
import { MetricDataType } from './metric-data-type.enum';
import { MetricTimeSpan } from './metric-time-span.enum';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';

export class DataSourceConfiguration {

  public calculation: MetricCalculation;
  public dataType: MetricDataType;
  public timeSpan: MetricTimeSpan;
  public component: RPiComponent;

  constructor() {
    this.calculation = MetricCalculation.AVERAGE;
    this.dataType = MetricDataType.TEMPERATURE;
    this.timeSpan = MetricTimeSpan.DAILY;
  }

}
