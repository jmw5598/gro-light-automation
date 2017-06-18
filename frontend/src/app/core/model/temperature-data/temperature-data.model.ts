import { RPiComponent } from '../rpicomponent/rpicomponent.model';

export class TemperatureData {

  constructor(
    public date: Date,
    public component: RPiComponent,
    public temperature: number
  ) {}

}
