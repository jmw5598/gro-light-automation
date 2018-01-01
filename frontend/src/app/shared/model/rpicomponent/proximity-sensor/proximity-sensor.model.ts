import { RPiComponent } from '../rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { ProximitySensorPreferences } from './proximity-sensor.preferences';

export class ProximitySensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public preferences: ProximitySensorPreferences
  ) {
    super(id, alias, pins);
  }

}
