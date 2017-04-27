import { Injectable } from '@angular/core';
import { CrudService } from '../crud.service';
import { RPiComponent } from '../../_model/rpicomponent';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { RPiComponentType } from '../../_model/rpicomponent-type.enum';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RPiComponentService extends CrudService<RPiComponent, number> {
  
  constructor(http: Http) {
    super('http://localhost:8080/api/component', http);
  }


  findAllByType(type: RPiComponentType): Observable<RPiComponent[]> {
    console.log('type: ' + RPiComponentType[type]);
    return this.http.get(this.base + '/byType?type=' + RPiComponentType[type], this.optionstemp())
      .map(this.extractData)
      .catch(this.handleError);
  }

  // this need to be refactored
  private optionstemp() {
    let headers = new Headers({ 'Authorization': '' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
