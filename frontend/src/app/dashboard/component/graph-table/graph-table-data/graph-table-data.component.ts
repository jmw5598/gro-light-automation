import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RPiComponentService } from '../../../../core/service/rpicomponent/rpicomponent.service';
import { RPiComponent } from '../../../../core/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '../../../../core/model/rpicomponent/rpicomponent-type.enum';

import { DataSourceConfiguration } from '../../../../dashboard/model/configuration/data-source/data-source.configuration';
import { MetricTimeSpan } from '../../../../dashboard/model/configuration/data-source/metric-time-span.enum';
import { MetricCalculation } from '../../../../dashboard/model/configuration/data-source/metric-calculation.enum';
import { MetricDataType } from '../../../../dashboard/model/configuration/data-source/metric-data-type.enum';

@Component({
  selector: 'gro-graph-table-data',
  templateUrl: './graph-table-data.component.html',
  styleUrls: ['./graph-table-data.component.css']
})
export class GraphTableDataComponent implements OnInit {

  private metricDataTypeEnum = MetricDataType;
  private metricCalculationEnum = MetricCalculation;
  private metricTimeSpanEnum = MetricTimeSpan;

  @Output()
  onUpdateData: EventEmitter<Object> = new EventEmitter<Object>();

  @Input()
  configuration: DataSourceConfiguration;

  @Input()
  isLoading: boolean = true;

  private components: RPiComponent[];

  selectedComponent: RPiComponent;

  constructor(
    private rPiComponentService: RPiComponentService
  ) {
    this.configuration = new DataSourceConfiguration();
  }

  ngOnInit() {
    this.rPiComponentService
      .findAllByType(RPiComponentType.TEMPERATURE_HUMIDITY)
        .subscribe(
          data => {
            this.components = data;
            this.selectedComponent = this.components[1];
            this.updateData()
          },
          error => console.log("error getting graph-table-data components")
        );
  }

  changeMetricDataType(dataType: MetricDataType) {
    this.configuration.dataType = dataType;
  }

  changeMetricCalc(calculation: MetricCalculation) {
    this.configuration.calculation = calculation;
  }

  changeSelectedComponent(component: RPiComponent) {
    this.selectedComponent = component;
  }

  updateData() {
    let details = {
      component: this.selectedComponent,
      metricDataType: this.configuration.dataType,
      metricTime: this.configuration.timeSpan,
      metricCalc: this.configuration.calculation
    };
    this.onUpdateData.emit(details);
  }

}
