import { Column } from '../column/column.model';

export class RowConfiguration {

  columns: Array<Column>;

  constructor() {
    this.columns = new Array<Column>();
  }

}
