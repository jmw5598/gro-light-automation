import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.onChangeOrientation.emit("inline");
    this.onChangeGraphType.emit('line');
  }

  changeOrientation(orientation: string) {
    this.onChangeOrientation.emit(orientation);
  }

  changeGraphType(graphType: string) {
    this.onChangeGraphType.emit(graphType);
  }

  changeGraphVisibility(event: any) {
    this.onChangeGraphVisibility.emit(event.target.checked);
  }

  changeTableVisibility(event: any) {
    this.onChangeTableVisibility.emit(event.target.checked);
  }

}
