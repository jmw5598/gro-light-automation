import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
  	SharedModule
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule {}
