import { Resolve } from '@angular/router';
import { CrudService } from '@app/core/service/crud.service';

export abstract class FindAllResolve<T> implements Resolve<Array<T>>  {

  constructor(protected service: CrudService<T, any>) {}

  resolve() {
    return this.service.findAll();
  }
}
