import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CrudService } from '@app/core/service/crud.service';
import { REQUEST_OPTIONS_DEFAULT } from '@app/core/service/request-options.default';
import { BASE_API_URL } from '@app/core/service/base-api-url.default';
import { RelayDTO } from '../../../shared/model/rpicomponent/relay/relaydto.model';
import { Relay } from '@app/shared/model/rpicomponent/relay/relay.model';

@Injectable()
export class RelayService extends CrudService<Relay, number> {

  constructor(http: Http) {
    super(BASE_API_URL + 'component/relay', http, REQUEST_OPTIONS_DEFAULT)
  }

  public toggle(relay: RelayDTO): void {
    let url: string = this.base + relay.component.id + '/relay?state=' + relay.state;
    console.log("inside toggle relay : url -> " + url);
    this.http.put(url, '', this.options)
      .subscribe(response => console.log("success"), error => console.log("error toggling relay"));
  }

  public poll(relay: RelayDTO): void {
    let url: string = this.base + relay.component.id + "/relay/poll";
    console.log("inside relay poll");
    this.http.get(url, this.options)
      .subscribe(response => console.log("success"), error => console.log("error polling relay"));
  }

}
