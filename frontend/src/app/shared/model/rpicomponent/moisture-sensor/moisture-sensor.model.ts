import { RPiComponent } from '../rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { MoistureSensorPreferences } from './moisture-sensor.preferences';

export class MoistureSensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public preferences: MoistureSensorPreferences
  ) {
    super(id, alias, pins);
  }

}
