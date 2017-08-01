import { Layout } from '@app/shared/model/dashboard/configuration/layout/layout.model';

export class Dashboard {

  constructor(
    public name: string,
    public layout: Layout
  ) {}

}
