import { RPiComponent } from '../rpicomponent.model';
import { RPiComponentType } from '../rpicomponent-type.enum';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { RelayPreferences } from './relay.preferences';
import { RelayState } from './relay-state.enum';

export class Relay extends RPiComponent {

  constructor(
    public id: number,
    public alias: string,
    public state: RelayState,
    public pins: Array<RPiPin>,
    public type: RPiComponentType,
    public preferences: RelayPreferences
  ) {
    super(id, alias, pins, type);
    if(!state)
      this.state = RelayState.DISABLED
  }

}
