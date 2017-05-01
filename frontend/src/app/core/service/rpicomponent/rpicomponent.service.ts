import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CrudService } from '../crud.service';
import { RPiComponent } from '../../model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '../../model/rpicomponent/rpicomponent-type.enum';

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

  private optionstemp() {
    let headers = new Headers({ 'Authorization': '' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
