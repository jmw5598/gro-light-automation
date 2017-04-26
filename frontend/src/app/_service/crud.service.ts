import { CrudOperations } from './crudoperations.interface';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class CrudService<T, ID> implements CrudOperations<T, ID> {
	
	private base: string;
	private http: Http;
	
	constructor(base: string, http: Http) {
		this.base = base;
		this.http = http;
	}

	save(t: T) {
		return this.http.post(this.base, t, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	update(t: T) {
		return this.http.put(this.base, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	findOne(id: ID) {
		return this.http.get(this.base + "/" + id, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	findAll() {
		return this.http.get(this.base, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	delete(id: ID) {
		return this.http.delete(this.base + '/' + id, this.options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};
	}

	private handleError(error: Response | any) {
		
		let msg: string;
		if(error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			msg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			msg = error.message ? error.message : error.toString();
		}
		return Observable.throw(msg);
	}

	private options() {
		let headers = new Headers({ 'Authorization': '' + localStorage.getItem('token') });
        let options = new RequestOptions({ headers: headers });
		return options;
	}

}