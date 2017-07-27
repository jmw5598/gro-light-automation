import { SortDirection } from './sort-direction.enum';

export class Sort {

  constructor (
  	public direction: SortDirection,
    public property: string,
    public ignoreCase: boolean,
    public nullHandling: string,
    public descending: boolean,
    public ascending: boolean
  ) {}

}