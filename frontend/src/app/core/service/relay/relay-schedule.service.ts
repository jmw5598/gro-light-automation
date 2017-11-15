import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CrudService } from '@app/core/service/crud.service';
import { RelayScheduleJob } from '@app/shared/model/rpicomponent/relay-schedule-job.model';

@Injectable()
export class RelayScheduleService extends CrudService<RelayScheduleJob, number> {

  constructor(http: Http) {
    super("http://192.168.1.7:8080/api/component/relay/schedule", http);
  }

  public toggle(id: number, enabled: boolean): Observable<RelayScheduleJob> {
    return this.http.put(this.base + '/' + id + '/toggle?enabled=' + enabled, {}, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

}
