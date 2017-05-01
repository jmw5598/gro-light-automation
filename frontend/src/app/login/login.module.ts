import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginComponent]
})
export class LoginModule {}