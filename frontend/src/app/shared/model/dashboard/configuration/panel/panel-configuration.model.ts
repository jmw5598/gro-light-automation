import { PanelLocation } from './panel-location.enum';
import { Row } from '../row/row.model';

export class PanelConfiguration {

  rows: Array<Row>;

  constructor(
    public location: PanelLocation,
    public classes: Array<string>
  ) {
    this.rows = new Array<Row>();
  }

}
