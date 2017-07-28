import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GraphType } from '@app/dashboard/model/configuration/widget/graph/graph/graph-type.enum';
import { OrientationType } from '@app/dashboard/model/configuration/widget/graph/graph-table/orientation-type.enum';

@Component({
  selector: 'gro-graph-table-options',
  templateUrl: './graph-table-options.component.html',
  styleUrls: ['./graph-table-options.component.css']
})
export class GraphTableOptionsComponent implements OnInit {

  private orientationTypeEnum = OrientationType;
  private graphTypeEnum = GraphType;

  @Output()
  onChangeOrientation: EventEmitter<OrientationType> = new EventEmitter<OrientationType>();

  @Output()
  onChangeGraphType: EventEmitter<GraphType> = new EventEmitter<GraphType>();

  @Output()
  onChangeGraphVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onChangeTableVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  orientation: OrientationType = OrientationType.INLINE;

  @Input()
  graphType: GraphType = GraphType.LINE;

  @Input()
  graphVisible: boolean = true;

  @Input()
  tableVisible: boolean = true;

  constructor() { }

  ngOnInit() { }

  changeOrientation(orientation: OrientationType) {
    this.onChangeOrientation.emit(orientation);
  }

  changeGraphType(graphType: GraphType) {
    this.graphType = graphType;
    this.onChangeGraphType.emit(graphType);
  }

  changeGraphVisibility() {
    this.onChangeGraphVisibility.emit(!this.graphVisible);
  }

  changeTableVisibility(event: any) {
    this.onChangeTableVisibility.emit(!this.tableVisible);
  }

}
