import { RPiComponent } from './rpicomponent.model';
import { RelayState } from './relay-state.enum';

export class RelayDTO {
  constructor (
      public component: RPiComponent,
      public state: RelayState
    ) {}
}
