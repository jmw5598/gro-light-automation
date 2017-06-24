import { RPiComponent } from './rpicomponent.model';

export class RelayDTO {
  constructor (
      public component: RPiComponent,
      public state: string
    ) {}
}