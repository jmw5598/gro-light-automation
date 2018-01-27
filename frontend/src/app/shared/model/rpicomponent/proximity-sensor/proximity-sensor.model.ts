import { RPiComponent } from '../rpicomponent.model';
import { RPiComponentType } from '../rpicomponent-type.enum';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { ProximitySensorPreferences } from './proximity-sensor.preferences';

export class ProximitySensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public type: RPiComponentType,
    public preferences: ProximitySensorPreferences
  ) {
    super(id, alias, pins, type);
  }

}
