import { RPiComponentType } from './rpicomponent-type.enum';

export class RPiComponent {

  constructor (
    public id: number,
    public alias: string,
    public pin: number,
    public type: RPiComponentType,
  ) {}

}
