import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TemperatureDataService {


  constructor(private http: Http) { }

  findAllMonthlyAverageByComponent(id: number): Observable<Object> {
    return null;
  }

  findAllDailyAverageByComponent(id: number): Observable<Object> {
    return null;
  }

  findAllDailyHighByComponent(id: number): Observable<Object> {
    return null;
  }

  findAllDailyLowByComponent(id: number): Observable<Object> {
    return null;
  }

  findAllHourlyAverageByComponent(id: number): Observable<Object> {
    return null;
  }

  findAllHourlyHighByComponent(id: number): Observable<Object> {
    return null;
  }

  findAllHourlyLowByComponent(id: number): Observable<Object> {
    return null;
  }

}
