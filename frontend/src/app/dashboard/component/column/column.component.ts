import { Component, OnInit, Input } from '@angular/core';

import { ColumnConfiguration } from '@app/dashboard/model/configuration/column/column.configuration';
import { Row } from '@app/dashboard/model/configuration/row/row.model';
import { Widget } from '@app/dashboard/model/configuration/widget/widget.model';

@Component({
  selector: 'gro-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input()
  configuration: ColumnConfiguration; // ColumnConfiguration (sizes)

  @Input()
  widget: Widget; // all components added to column change to list

  @Input()
  rows: Array<Row>; // all rows

  // if has rows can't add components;

  constructor() { }

  ngOnInit() {
    this.rows = Array<Row>();
  }

  addWidget(widget: Widget) {
    this.widget = widget;
  }

  addRow(row: Row) {
    if(this.widget)
      this.rows.push(row);
    else
      console.log("cannot add row column that contains a component");  // use toast message to notify error
  }

}
