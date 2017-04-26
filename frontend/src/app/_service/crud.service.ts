import { CrudOperations } from './crudoperations.interface';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class CrudService<T, ID> implements CrudOperations<T, ID> {

  protected base: string;
  protected http: Http;
	
  constructor(base: string, http: Http) {
    this.base = base;
    this.http = http;
  }

  save(t: T) {
    return this.http.post(this.base, t, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(t: T) {
    return this.http.put(this.base, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findOne(id: ID) {
    return this.http.get(this.base + "/" + id, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAll() {
    return this.http.get(this.base, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(id: ID) {
    return this.http.delete(this.base + '/' + id, this.options())
		 	.map(this.extractData)
      .catch(this.handleError);
	}

  protected extractData(res: Response) {
    let body = res.json() || '';
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