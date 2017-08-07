import { Sort } from './sort.model';

export class Page<T> {

  constructor(
    public content: Array<T>,
    public first: boolean,
    public last: boolean,
    public number: number,
    public numberOfElements: number,
    public size: number,
    public sort: Sort,
    public totalPages: number,
    public totalElements: number
  ) {}

}
