import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CrudService } from '../crud.service';
import { REQUEST_OPTIONS_DEFAULT } from '../request-options.default';
import { BASE_API_URL } from '@app/core/service/base-api-url.default';
import { RPiComponent } from '../../../shared/model/rpicomponent/rpicomponent.model';
import { RelayDTO } from '../../../shared/model/rpicomponent/relay/relaydto.model';
import { RPiComponentType } from '../../../shared/model/rpicomponent/rpicomponent-type.enum';

@Injectable()
export class RPiComponentService extends CrudService<RPiComponent, number> {

  constructor(http: Http) {
    super(BASE_API_URL + 'component', http, REQUEST_OPTIONS_DEFAULT);
  }


  findAllByType(type: RPiComponentType): Observable<RPiComponent[]> {
    return this.http.get(this.base + '/byType?type=' + RPiComponentType[type], this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAllRelays(): Observable<RelayDTO[]> {
    return this.http.get(this.base + '/byType?type=' + RPiComponentType[RPiComponentType.RELAY], this.options)
      .map(res => {
        let json = res.json();
        let temp: RelayDTO[] = json.map(e => new RelayDTO(e, null));
        return temp;
      })
      .catch(this.handleError);
  }

}
