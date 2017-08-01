import { Row } from '../row/row.model';
import { Widget } from '../widget/widget.model';

export class ColumnConfiguration {

  rows: Array<Row>;
  widgets: Array<Widget>;

  constructor(
    public classes: Array<any>
  ) {
    this.rows = new Array<Row>();
    this.widgets = Array<Widget>();
  }

}
