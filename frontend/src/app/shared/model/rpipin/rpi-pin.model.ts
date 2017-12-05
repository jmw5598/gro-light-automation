import { RPiPinDirection } from './rpi-pin-direction.enum';
import { RPiComponent } from '../rpicomponent/rpicomponent.model';

export class RPiPin {
  constructor(
    public id: number,
    public physicalPin: number,
    public usable: boolean,
    public direction: RPiPinDirection,
    public component?: RPiComponent
  ) {}
}
