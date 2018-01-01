import { RelayDTO } from '@app/shared/model/rpicomponent/relay/relaydto.model';
import { SimpleRelayColor } from './simple-relay-color.enum';
import { ControlWidgetConfiguration } from '../control-widget.configuration';
import { ControlWidgetType } from '../control-widget-type.enum';

export class SimpleRelayConfiguration extends ControlWidgetConfiguration {

  relay: RelayDTO;
  color: SimpleRelayColor;

  constructor(relay: RelayDTO) {
    super();
    this.relay = relay;
    this.color = SimpleRelayColor.GREEN;
  }

}
