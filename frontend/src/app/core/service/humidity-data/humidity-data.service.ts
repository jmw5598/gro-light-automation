import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { REQUEST_OPTIONS_DEFAULT } from '@app/core/service/request-options.default';
import { BASE_API_URL } from '@app/core/service/base-api-url.default';
import { HumidityData } from '../../../shared/model/humidity-data/humidity-data.model';
import { Page } from '../../../shared/model/paging/page.model';

@Injectable()
export class HumidityDataService {

  private base: string;
  private options: Function;

  constructor(private http: Http) {
    this.base = BASE_API_URL + 'component';
    this.options = REQUEST_OPTIONS_DEFAULT;
  }

  findCustomByComponent(id: number, path: string, page: number): Observable<Page<HumidityData>> {
    let url = this.base + '/' + id + "/humidity/" + path + '?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    let body = res.json() || '';
    let result = Array<HumidityData>();
    body.content.forEach(e => {
        result.push(new HumidityData(new Date(e.timestamp), e.component, e.humidity));
    })
    body.content = result;
    return body;
  }

  protected handleError(error: Response | any) {
    let msg: string;
    if(error instanceof Response) {
      msg = error.json() || '';
    } else {
      msg = error.message ? error.message : error.toString();
    }

    return Observable.throw(msg);
  }

}
