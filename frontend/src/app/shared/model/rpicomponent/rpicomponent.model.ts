import { RPiComponentType } from './rpicomponent-type.enum';

export class RPiComponent {

  current: number;
  constructor (
    public id: number,
    public alias: string,
    public pin: number,
    public type: RPiComponentType,
  ) {
    this.current = 0;
  }

}
