import { PanelType } from './panel-type.enum';
import { PanelConfiguration } from './panel.configuration';

export class Panel {

  constructor(
    public type: PanelType,
    public configuration: PanelConfiguration
  ) {}

}
