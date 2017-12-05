import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { RelayDTO } from '../../../shared/model/rpicomponent/relaydto.model';

@Injectable()
export class RelayService {

  base: string = 'http://localhost:8080/api/component/';

  constructor(private http: Http) { }

  public toggle(relay: RelayDTO): void {
    let url: string = this.base + relay.component.id + '/relay?state=' + relay.state;
    console.log("inside toggle relay : url -> " + url);
    this.http.put(url, '', this.optionstemp())
      .subscribe(response => console.log("success"), error => console.log("error"));

  }

  public poll(relay: RelayDTO): void {
    let url: string = this.base + relay.component.id + "/relay/poll";
    console.log("inside relay poll");
    this.http.get(url, this.optionstemp())
      .subscribe(response => console.log("success"), error => console.log("error"));
  }

  private optionstemp() {
    let headers = new Headers({ 'Authorization': '' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });
    return options;
  }

}
