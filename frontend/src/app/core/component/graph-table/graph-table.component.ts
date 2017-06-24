import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Page } from '../../model/paging/page.model';

@Component({
  selector: 'gro-graph-table',
  templateUrl: './graph-table.component.html',
  styleUrls: ['./graph-table.component.css']
})
export class GraphTableComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  // user data service within this component
  @Output()
  onPageChange = new EventEmitter<any>();

  @Input()
  page: Page<any>;

  @Input()
  headings: string[];

  @Input()
  title: string;

  pageChange(page: number) {
    console.log("inside graph-table");
    this.onPageChange.emit(page);
  }

  onChangeOrientation(orientation: string) {
    this.orientation = orientation;
  }

  onChangeGraphType(graphType: string) {
    this.graphType = graphType;
  }

  onChangeGraphVisibility(state: boolean) {
    if(this.tableVisible && this.graphVisible) {
      this.onChangeOrientation("stacked");
    }
    this.graphVisible = state;
  }

  onChangeTableVisibility(state: boolean) {
    if(this.tableVisible && this.graphVisible) {
      this.onChangeOrientation("stacked");
    }
    this.tableVisible = state;
  }

}
