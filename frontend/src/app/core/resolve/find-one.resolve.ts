import { Resolve, ActivatedRouteSnapshot, Route } from '@angular/router';
import { CrudService } from '@app/core/service/crud.service';

export abstract class FindOneResolve<T> implements Resolve<T> {

  constructor(protected service: CrudService<T, any>) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.findOne(route.params['id']);
  }

}
