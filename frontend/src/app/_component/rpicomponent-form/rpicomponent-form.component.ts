import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gro-rpicomponent-form',
  templateUrl: './rpicomponent-form.component.html',
  styleUrls: ['./rpicomponent-form.component.css']
})
export class RPiComponentFormComponent implements OnInit {
	
  @Input()
  formSettings: Object;

  redirect: string;
  form: FormGroup;
  errorShown: boolean;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      alias: ['', Validators.required],
      pin: ['', Validators.required]
    });
    this.errorShown = false;
  }

  ngOnInit() {
  }

}
