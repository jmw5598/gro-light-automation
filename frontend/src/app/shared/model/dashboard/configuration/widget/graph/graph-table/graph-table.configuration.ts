import { DataSourceConfiguration } from './data-source/data-source.configuration';
import { GraphConfiguration } from '../graph/graph.configuration';
import { OrientationType } from './orientation-type.enum';
import { TableConfiguration } from '../../table/table/table.configuration';

export class GraphTableConfiguration {

  public graph: GraphConfiguration;
  public table: TableConfiguration;
  public datasource: DataSourceConfiguration;
  public orientation: OrientationType;
  public editable: boolean;
  public classes: string[];

  constructor() {
    this.graph = new GraphConfiguration();
    this.table = new TableConfiguration();
    this.datasource = new DataSourceConfiguration();
    this.orientation = OrientationType.INLINE;
    this.editable = true;
    this.classes = [];
  }

}
