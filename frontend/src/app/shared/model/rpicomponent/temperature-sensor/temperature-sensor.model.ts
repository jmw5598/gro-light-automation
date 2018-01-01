import { RPiComponent } from '../rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { TemperatureSensorPreferences } from './temperature-sensor.preferences';

export class TemperatureSensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public preferences: TemperatureSensorPreferences
  ) {
    super(id, alias, pins);
  }

}
