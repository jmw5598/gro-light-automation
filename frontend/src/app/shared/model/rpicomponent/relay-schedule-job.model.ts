import { RPiComponent } from './rpicomponent.model';
import { RelayState } from './relay/relay-state.enum';

export class RelayScheduleJob {
  constructor(
      public id: number,
      public component: RPiComponent,
      public state: RelayState,
      public enabled: boolean,
      public time: number
  ) {}
}
