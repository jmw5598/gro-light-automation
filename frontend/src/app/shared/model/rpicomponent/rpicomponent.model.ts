import { RPiComponentType } from './rpicomponent-type.enum';
import { RPiPin } from '../rpipin/rpi-pin.model';

export abstract class RPiComponent {

  public current: number = 0;

  constructor (
    public id: number,
    public alias: string,
    public pins: Array<RPiPin>,
    public type: RPiComponentType
  ) { }

}
