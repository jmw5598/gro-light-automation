import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CrudService } from '@app/core/service/crud.service';
import { REQUEST_OPTIONS_DEFAULT } from '@app/core/service/request-options.default';
import { BASE_API_URL } from '@app/core/service/base-api-url.default';
import { RelayScheduleJob } from '@app/shared/model/rpicomponent/relay-schedule-job.model';

@Injectable()
export class RelayScheduleService extends CrudService<RelayScheduleJob, number> {

  constructor(http: Http) {
    super(BASE_API_URL + "component/relay/schedule", http, REQUEST_OPTIONS_DEFAULT);
  }

  public toggle(id: number, enabled: boolean): Observable<RelayScheduleJob> {
    return this.http.put(this.base + '/' + id + '/toggle?enabled=' + enabled, {}, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
