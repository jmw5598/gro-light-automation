import { RPiComponentType } from './rpicomponent-type.enum';
import { RPiPin } from '../rpipin/rpi-pin.model';

export class RPiComponent {

  current: number;
  constructor (
    public id: number,
    public alias: string,
    public type: RPiComponentType,
    public pins?: Array<RPiPin>
  ) {
    this.current = 0;
  }

}
