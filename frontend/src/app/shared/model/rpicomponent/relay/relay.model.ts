import { RPiComponent } from '../rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { RelayPreferences } from './relay.preferences';
import { RelayState } from './relay-state.enum';

export class Relay extends RPiComponent {

  constructor(
    public id: number,
    public alias: string,
    public state: RelayState,
    public pins: Array<RPiPin>,
    public preferences: RelayPreferences
  ) {
    super(id, alias, pins);
    if(!state)
      this.state = RelayState.DISABLED
  }

}
