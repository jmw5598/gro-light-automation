import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/service/authentication/authentication.service';

interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'gro-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private auth: AuthenticationService) {
    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(value: any) {
    const credentials: Credentials = {
      username : value.username,
      password : value.password
    };

    this.auth.doLogin(credentials);
  }
}
