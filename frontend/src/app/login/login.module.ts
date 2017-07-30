import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LOGIN_ROUTING } from '@app/login/login.routing';
import { SharedModule } from '@app/shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
  	SharedModule,
    RouterModule.forChild(LOGIN_ROUTING)
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule {}
