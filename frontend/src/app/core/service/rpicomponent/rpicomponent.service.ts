import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CrudService } from '../crud.service';
import { RPiComponent } from '../../model/rpicomponent/rpicomponent.model';
import { RelayDTO } from '../../model/rpicomponent/relaydto.model';
import { RPiComponentType } from '../../model/rpicomponent/rpicomponent-type.enum';

@Injectable()
export class RPiComponentService extends CrudService<RPiComponent, number> {

  constructor(http: Http) {
    super('http://192.168.1.7:8080/api/component', http);
  }


  findAllByType(type: RPiComponentType): Observable<RPiComponent[]> {
    return this.http.get(this.base + '/byType?type=' + RPiComponentType[type], this.optionstemp())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllRelays(): Observable<RelayDTO[]> {
    return this.http.get(this.base + '/byType?type=' + RPiComponentType[RPiComponentType.RELAY], this.optionstemp())
      .map(res => {
        let json = res.json();
        let temp: RelayDTO[] = json.map(e => new RelayDTO(e, null));
        return temp;
      })
      .catch(this.handleError);
  }

  private optionstemp() {
    let headers = new Headers({ 'Authorization': '' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
