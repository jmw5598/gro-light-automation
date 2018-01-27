import { RPiComponent } from '../rpicomponent.model';
import { RPiComponentType } from '../rpicomponent-type.enum';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { MoistureSensorPreferences } from './moisture-sensor.preferences';

export class MoistureSensor extends RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public type: RPiComponentType,
    public preferences: MoistureSensorPreferences
  ) {
    super(id, alias, pins, type);
  }

}
