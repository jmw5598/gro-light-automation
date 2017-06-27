import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gro-graph-table-data',
  templateUrl: './graph-table-data.component.html',
  styleUrls: ['./graph-table-data.component.css']
})
export class GraphTableDataComponent implements OnInit {

  @Output()
  onUpdateData: EventEmitter<Object> = new EventEmitter<Object>();

  @Input()
  metricDataType: string = 'temperature';

  @Input()
  metricCalc: string = 'average';

  @Input()
  metricTime: string = 'daily';

  constructor() { }

  ngOnInit() {
    this.updateData();
  }

  changeMetricDataType(metricDataType: string) {
    this.metricDataType = metricDataType;
  }

  changeMetricCalc(metricCalc: string) {
    this.metricCalc = metricCalc;
  }

  updateData() {
    let details = {
      componentId: 1,
      metricDataType: this.metricDataType,
      metricTime: this.metricTime,
      metricCalc: this.metricCalc
    };
    this.onUpdateData.emit(details);
  }

}
