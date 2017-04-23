import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RPiComponentType } from '../../_model/rpicomponent-type.enum';
import { RPiComponent } from '../../_model/rpicomponent';

@Component({
  selector: 'gro-rpicomponent-form',
  templateUrl: './rpicomponent-form.component.html',
  styleUrls: ['./rpicomponent-form.component.css']
})
export class RPiComponentFormComponent implements OnInit {
	
  @Output()
  onFormSubmit: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  @Input()
  formSettings: Object;

  RPiComponentType = RPiComponentType;

  redirect: string;
  form: FormGroup;
  errorShown: boolean;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      alias: ['', Validators.required],
      pin: ['', Validators.required],
      type: ['', Validators.required]
    });
    this.errorShown = false;
  }

  ngOnInit() {
  }

  submit(component: RPiComponent) {
    this.onFormSubmit.emit(component);
  }

}
