import { Row } from '../row/row.model';
import { Widget } from '../widget/widget.model';

export class ColumnConfiguration {

  classes: Array<string>;
  rows: Array<Row>;
  widgets: Array<Widget>;

  constructor() {
    this.classes = new Array<string>();
  }

}
