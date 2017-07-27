import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HumidityData } from '../../model/humidity-data/humidity-data.model';
import { Page } from '../../model/paging/page.model';

@Injectable()
export class HumidityDataService {

  private base: string;

  constructor(private http: Http) {
    this.base = 'http://192.168.1.7:8080/api/component';
  }

  findCustomByComponent(id: number, path: string, page: number): Observable<Page<HumidityData>> {
    let url = this.base + '/' + id + "/humidity/" + path;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    let body = res.json() || '';
    console.log(body.content[0]);
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

  // need to decouple this.
  private options() {
    let headers = new Headers({ 'Authorization': '' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
