import { PanelType } from './panel-type.enum';
import { PanelConfiguration } from './panel-configuration.model';

export class Panel {

  public components: Array<any>

  constructor(
    public type: PanelType,
    public configuration: PanelConfiguration
  ) {
    this.components = new Array<any>();
  }

  addComponent(component: any) {
    if(component !== null)
      this.components.push(component);
  }

}
