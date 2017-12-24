import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { REQUEST_OPTIONS_DEFAULT } from '@app/core/service/request-options.default';
import { CrudService } from '@app/core/service/crud.service';

import { Dashboard } from '@app/shared/model/dashboard/dashboard.model';

@Injectable()
export class DashboardService extends CrudService<Dashboard, number> {

  constructor(http: Http ) {
    super('http://localhost:8080/api/component', http, REQUEST_OPTIONS_DEFAULT);
  }

}
