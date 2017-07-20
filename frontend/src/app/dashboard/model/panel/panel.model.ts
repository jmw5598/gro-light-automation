import { ComponentItem } from '../component-item/component-item.model';
import { PanelType } from './panel-type.enum';
import { PanelConfiguration } from './panel-configuration.model';

export class Panel {

  public components: Array<ComponentItem>

  constructor(
    public type: PanelType,
    public configuration: PanelConfiguration
  ) {
    this.components = new Array<ComponentItem>();
  }

  addComponent(component: ComponentItem) {
    if(component !== null)
      this.components.push(component);
  }

}
