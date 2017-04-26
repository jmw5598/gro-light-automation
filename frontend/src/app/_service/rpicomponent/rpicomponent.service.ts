import { Injectable } from '@angular/core';
import { CrudService } from '../crud.service';
import { RPiComponent } from '../../_model/rpicomponent';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';

@Injectable()
export class RPiComponentService extends CrudService<RPiComponent, number> {

  constructor(http: Http) {
  	super('http://localhost:8080/api/component', http);
  }

}
