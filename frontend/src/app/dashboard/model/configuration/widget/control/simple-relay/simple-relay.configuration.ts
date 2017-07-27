import { RelayDTO } from '../../../../../../shared/model/rpicomponent/relaydto.model';
import { SimpleRelayColor } from './simple-relay-color.enum';

export class SimpleRelayConfiguration {

  relay: RelayDTO;
  color: SimpleRelayColor;

  constructor(relay: RelayDTO) {
    this.relay = relay;
    this.color = SimpleRelayColor.GREEN;
  }

}
