import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { RelayScheduleJob } from '@app/shared/model/rpicomponent/relay-schedule-job.model';
import { RelayState } from '@app/shared/model/rpicomponent/relay-state.enum';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

import { RPiComponentService } from '@app/core/service/rpicomponent/rpicomponent.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';
@Component({
  selector: 'gro-relay-schedule-form',
  templateUrl: './relay-schedule-form.component.html',
  styleUrls: ['./relay-schedule-form.component.css']
})
export class RelayScheduleFormComponent implements OnInit {

  @Output()
  onFormSubmit: EventEmitter<RelayScheduleJob> = new EventEmitter<RelayScheduleJob>();

  @Input()
  submitLabel: string;

  form: FormGroup;
  components: Array<RPiComponent>;
  relayState = RelayState;

  constructor(
    private formBuilder: FormBuilder,
    private rPiComponentService: RPiComponentService,
    private toasterService: ToasterService
  ) {
    this.form = formBuilder.group({
      component: ['', Validators.required],
      state: ['', Validators.required],
      time: ['', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\:(0[0-9]|[1-5][0-9])\s([AaPp][Mm])$/g) //Pattern for time with AM PM (ex: 12:44 PM)
      ]],
      enabled: ['true', Validators.required]
    });
  }

  ngOnInit() {
    this.submitLabel = "Submit";
    this.rPiComponentService.findAllByType(RPiComponentType.RELAY)
      .subscribe(
        data => this.components = data,
        error => this.toasterService.toast("Error loading relay components", ToastType.WARNING)
      );
  }

  submit(schedule: any) {
    let temp = new RelayScheduleJob(-1,
      schedule.component,
      schedule.state,
      schedule.enabled,
      this.parseTime(schedule.time)
    );
    this.onFormSubmit.emit(temp);
  }

  reset() {
    this.form.reset();
    this.form.controls['enabled'].setValue(true); //set enabled toggle to true (default);
  }

  private parseTime(time: string): number {
    let date: Date = new Date();
    const ampm = time.substring(time.length - 2, time.length).toLowerCase();
    const hour = Number.parseInt(time.substring(0, time.indexOf(':')));
    const minute = Number.parseInt(time.substring(time.indexOf(':') + 1, time.indexOf(':') + 3));
    date.setHours((ampm === "pm" ? hour + 12 :  hour), minute, 0); // incorrect for 12 AM, 12 PM

    return date.getTime();
  }

}
