import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TemperatureData } from '../../../shared/model/temperature-data/temperature-data.model';
import { Page } from '../../../shared/model/paging/page.model';

@Injectable()
export class TemperatureDataService {

  private base: string;

  constructor(private http: Http) {
    this.base = 'http://192.168.1.7:8080/api/component';
  }

  findCustomByComponent(id: number, path: string, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + "/temperature/" + path + '?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllMonthlyAverageByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/monthly/average?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllDailyAverageByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/daily/average?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllDailyHighByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/daily/high?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllDailyLowByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/daily/low?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllHourlyAverageByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/hourly/average?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllHourlyHighByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/hourly/high?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllHourlyLowByComponent(id: number, page: number): Observable<Page<TemperatureData>> {
    let url = this.base + '/' + id + '/temperature/hourly/low?page=' + page;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    let body = res.json() || '';
    let result = Array<TemperatureData>();
    body.content.forEach(e => {
        result.push(new TemperatureData(new Date(e.timestamp), e.component, e.temperature));
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
