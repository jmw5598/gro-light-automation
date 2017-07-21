import { GraphType } from './graph-type.enum';
export class GraphConfiguration {

  public type: GraphType;
  public data: number[];
  public labels: string[];
  public visible: boolean;

  constructor() {
    this.type = GraphType.LINE;
    this.visible = true;
  }

}
