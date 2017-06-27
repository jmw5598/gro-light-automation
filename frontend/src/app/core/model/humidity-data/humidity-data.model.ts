import { RPiComponent } from '../rpicomponent/rpicomponent.model';

export class HumidityData {

  constructor(
    public timestamp: Date,
    public component: RPiComponent,
    public humidity: number
  ) {}

}
