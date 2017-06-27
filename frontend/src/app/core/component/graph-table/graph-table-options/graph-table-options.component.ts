import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gro-graph-table-options',
  templateUrl: './graph-table-options.component.html',
  styleUrls: ['./graph-table-options.component.css']
})
export class GraphTableOptionsComponent implements OnInit {

  @Output()
  onChangeOrientation: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onChangeGraphType: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onChangeGraphVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onChangeTableVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  orientation: string = 'inline';

  @Input()
  graphType: string = 'line';

  @Input()
  graphVisible: boolean = true;

  @Input()
  tableVisible: boolean = true;

  constructor() { }

  ngOnInit() { }

  changeOrientation(orientation: string) {
    this.onChangeOrientation.emit(orientation);
  }

  changeGraphType(graphType: string) {
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
