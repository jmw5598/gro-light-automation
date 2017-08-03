import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from '@app/core/service/crud.service';

import { Dashboard } from '@app/shared/model/dashboard/dashboard.model';

@Injectable()
export class DashboardService extends CrudService<Dashboard, number> {

  constructor(http: Http) {
    super('http://192.168.1.7:8080/api/component', http);
  }

}
