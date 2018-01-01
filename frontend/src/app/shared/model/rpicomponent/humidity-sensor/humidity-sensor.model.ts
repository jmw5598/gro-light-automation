import { RPiComponent } from '../rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { HumiditySensorPreferences } from './humidity-sensor.preferences';

export class HumiditySensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public preferences: HumiditySensorPreferences
  ) {
    super(id, alias, pins);
  }

}
