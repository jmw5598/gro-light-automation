import { RPiComponent } from '../rpicomponent/rpicomponent.model';

export class TemperatureData {

  constructor(
    public timestamp: Date,
    public component: RPiComponent,
    public temperature: number
  ) {}

}
