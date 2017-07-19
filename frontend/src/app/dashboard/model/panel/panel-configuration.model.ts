import { PanelLocation } from './panel-location.enum';

export class PanelConfiguration {

  constructor(
    public location: PanelLocation,
    public classes: Array<string>
  ) {}

}
