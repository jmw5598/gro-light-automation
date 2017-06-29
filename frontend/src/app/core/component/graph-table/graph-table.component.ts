import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TemperatureDataService } from '../../service/temperature-data/temperature-data.service';
import { HumidityDataService } from '../../service/humidity-data/humidity-data.service';
import { Page } from '../../model/paging/page.model';

@Component({
  selector: 'gro-graph-table',
  templateUrl: './graph-table.component.html',
  styleUrls: ['./graph-table.component.css']
})
export class GraphTableComponent implements OnInit {

  @Output()
  onPageChange = new EventEmitter<any>();

  @Input()
  orientation: string = "inline";

  @Input()
  graphType: string = "line";

  @Input()
  graphData: Array<any>;

  @Input()
  graphLabels: Array<any>;

  @Input()
  graphVisible: boolean = true;

  @Input()
  tableVisible: boolean = true;

  @Input()
  editable: boolean = true;

  @Input()
  headings: string[];

  @Input()
  title: string = '';

  // INPUTS FOR DATA
  @Input()
  metricDataType: string = 'temperature';

  @Input()
  metricTime: string = 'daily'

  @Input()
  metricCalc: string = 'average';

  page: Page<any>;

  constructor(
    private temperatureDataService: TemperatureDataService,
    private humidityDataService: HumidityDataService

  ) { }

  ngOnInit() { }

  pageChange(page: number) {
    // need to fix paging still
    this.onPageChange.emit(page);
  }

  onUpdateData(event:any) {
    let url: string = event.metricTime + '/' + event.metricCalc;
    if(event.metricDataType === 'temperature') {
      this.temperatureDataService
        .findCustomByComponent(event.componentId, url, 0)
          .subscribe(
            data => this.handleTemperatureDataUpdate(event, data),
            error => console.log('error getting temp data') //replace with toast message?
          );
      } else if(event.metricDataType === 'humidity') {
        this.humidityDataService
          .findCustomByComponent(event.componentId, url, 0)
            .subscribe(
              data => this.handleHumidityDataUpdate(event, data),
              error => console.log('error getting temp data') //replace with toast message?
            );
      }
  }

  onChangeOrientation(orientation: string) {
    this.orientation = orientation;
  }

  onChangeGraphType(graphType: string) {
    this.graphType = graphType;
  }

  onChangeGraphVisibility(state: boolean) {
    this.graphVisible = state;
  }

  onChangeTableVisibility(state: boolean) {
    this.tableVisible = state;
  }

  private handleTemperatureDataUpdate(event: any, data:any) {
    this.page = data;
    this.graphData = [];
    this.graphLabels = [];
    this.page.content.forEach(e => {
      this.title = event.metricDataType + '_' + event.metricTime + '_' + event.metricCalc
      this.graphData.push(e.temperature); // built data for graph
      this.graphLabels.push(e.timestamp.getDate().toString());      // built labels for graph
    });
  }

  private handleHumidityDataUpdate(event: any, data:any) {
    this.page = data;
    this.graphData = [];
    this.graphLabels = [];
    this.page.content.forEach(e => {
      this.title = event.metricDataType + '_' + event.metricTime + '_' + event.metricCalc
      this.graphData.push(e.humidity); // built data for graph
      this.graphLabels.push(e.timestamp.getDate().toString());      // built labels for graph
    });
  }

}
