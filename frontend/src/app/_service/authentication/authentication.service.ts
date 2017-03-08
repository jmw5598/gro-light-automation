import { Injectable } from '@angular/core';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(public http: AuthHttp) { }

  doLogin(credentials) {
    return this.http.post('http://localhost:8080/auth', credentials)
      .map(res => {
        const data = res.json();
        if (data) {
          localStorage.setItem('token', data.token);
        }
      });
  }

  doLogout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired('token');
  }

  getRoles() {
    // get roles from localStorage.getItem('user').roles
  }

}
