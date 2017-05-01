import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './guard/authentication.guard';
import { RoleGuard } from './guard/role.guard';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
    headerPrefix: ''
  }), http, options);
}


@NgModule({
  providers: [
    AuthenticationService, 
    AuthenticationGuard, 
    RoleGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions],
    },

  ]
})
export class AuthenticationModule {}
