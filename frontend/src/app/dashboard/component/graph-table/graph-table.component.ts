import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TemperatureDataService } from '../../../core/service/temperature-data/temperature-data.service';
import { HumidityDataService } from '../../../core/service/humidity-data/humidity-data.service';
import { Page } from '../../../shared/model/paging/page.model';

import { GraphTableConfiguration } from '../../model/configuration/widget/graph/graph-table/graph-table.configuration';
import { GraphType } from '../../model/configuration/widget/graph/graph/graph-type.enum';
import { OrientationType } from '../../model/configuration/widget/graph/graph-table/orientation-type.enum';

import { KeyToTitlePipe } from '../../../shared/pipe/key-to-title/key-to-title.pipe';

@Component({
  selector: 'gro-graph-table',
  templateUrl: './graph-table.component.html',
  styleUrls: ['./graph-table.component.css']
})
export class GraphTableComponent implements OnInit {

  private orientationTypeEnum = OrientationType;
  private graphTypeEnum = GraphType;

  @Output()
  onPageChange = new EventEmitter<any>();

  //new single input with GraphTableConfiguration
  @Input()
  configuration: GraphTableConfiguration;

  graphData: Array<any>;
  graphLabels: Array<any>;
  headings: string[];
  title: string = '';
  titleLabel: string;

  // INPUTS FOR DATA
  @Input()
  metricDataType: string = 'temperature';

  @Input()
  metricTime: string = 'daily'

  @Input()
  metricCalc: string = 'average';

  page: Page<any>;
  isLoading: boolean = true;

  constructor(
    private temperatureDataService: TemperatureDataService,
    private humidityDataService: HumidityDataService
  ) {
    this.configuration = new GraphTableConfiguration();
  }

  ngOnInit() { }

  pageChange(page: number) {
    // need to fix paging still
    this.onPageChange.emit(page);
  }

  onUpdateData(event:any) {
    console.log("updating data...");
    console.log(event);
    this.isLoading = true;
    let url: string = event.metricTime + '/' + event.metricCalc;
    if(event.metricDataType.toLowerCase() === 'temperature') {
      this.temperatureDataService
        .findCustomByComponent(event.component.id, url, 0)
          .subscribe(
            data => {
              console.log("success update data temperature");
              this.handleTemperatureDataUpdate(event, data);
              this.isLoading = false;
            },
            error => {
              console.log('error getting temp data'); //replace with toast message?
              this.isLoading = false;
            }
          );
      } else if(event.metricDataType.toLowerCase() === 'humidity') {
        console.log("event change ");
        console.log(event);
        this.humidityDataService
          .findCustomByComponent(event.component.id, url, 0)
            .subscribe(
              data => {
                this.handleHumidityDataUpdate(event, data);
                this.isLoading = false;
              },
              error => {
                console.log('error getting temp data'); //replace with toast message?
                this.isLoading = false;
              }
            );
      }
  }

  onChangeOrientation(orientation: OrientationType) {
    this.configuration.orientation = orientation;
  }

  onChangeGraphType(graphType: GraphType) {
    this.configuration.graph.type = graphType;
  }

  onChangeGraphVisibility(visible: boolean) {
    this.configuration.graph.visible = visible;
  }

  onChangeTableVisibility(visible: boolean) {
    this.configuration.table.visible = visible;
  }

  private handleTemperatureDataUpdate(event: any, data:any) {
    this.page = data;
    this.graphData = [];
    this.graphLabels = [];
    this.page.content.forEach(e => {
      this.graphData.push(e.temperature); // built data for graph
      this.graphLabels.push(e.timestamp.getDate().toString());      // built labels for graph
    });
    this.title = event.metricDataType + '_' + event.metricTime + '_' + event.metricCalc;
    this.titleLabel = event.component.alias;
  }

  private handleHumidityDataUpdate(event: any, data:any) {
    this.page = data;
    this.graphData = [];
    this.graphLabels = [];
    this.page.content.forEach(e => {
      this.graphData.push(e.humidity); // built data for graph
      this.graphLabels.push(e.timestamp.getDate().toString());      // built labels for graph
    });
    this.title = event.metricDataType + '_' + event.metricTime + '_' + event.metricCalc;
    this.titleLabel = event.component.alias;
  }

}
