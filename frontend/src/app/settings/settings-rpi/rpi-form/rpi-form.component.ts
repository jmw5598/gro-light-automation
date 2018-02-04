import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RPi } from '@app/shared/model/rpi/rpi.model';
import { RPiService } from '@app/core/service/rpi/rpi.service';

@Component({
  selector: 'gro-rpi-form',
  templateUrl: './rpi-form.component.html',
  styleUrls: ['./rpi-form.component.css']
})
export class RPiFormComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private rpiService: RPiService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      ip: ['', [
        Validators.required,
        Validators.pattern("^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$")
      ]],
      port: ['', [
        Validators.required,
        Validators.pattern("^([1-9]{1})([0-9]{0,3})$")
      ]],
      mqttUsername: ['', Validators.required],
      mqttPassword: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required]
    })
;  }

  ngOnInit() {
  }

  submit(value: RPi) {
    this.rpiService.save(value)
      .subscribe(
        data => this.router.navigate(['/settings/rpi/', data.id]),
        error => console.log("error saving raspberry pi")
      );
  }

}
