import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

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
