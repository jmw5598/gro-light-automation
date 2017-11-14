import { Component, OnInit } from '@angular/core';

import { KeyToTitlePipe } from '@app/shared/pipe/key-to-title/key-to-title.pipe';
import { PageLoading } from '@app/shared/component/page-loader/page-loading';
import { RelayScheduleService } from '@app/core/service/relay/relay-schedule.service';
import { RelayScheduleJob } from '@app/shared/model/rpicomponent/relay-schedule-job.model';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'gro-settings-schedule',
  templateUrl: './settings-schedule.component.html',
  styleUrls: ['./settings-schedule.component.css']
})
export class SettingsScheduleComponent extends PageLoading implements OnInit {

  schedules: Array<RelayScheduleJob>;
  scheduleType: string = "FIXED";
  constructor(
    private relayScheduleService: RelayScheduleService,
    private toasterService: ToasterService
  ) {
    super(true);
  }

  ngOnInit() {
    this.relayScheduleService.findAll()
      .subscribe(
        data => this.schedules = data,
        error => this.toasterService.toast("Error retrieving relay schedules", ToastType.WARNING),
        () => this.ready()
      )
  }

  saveSchedule(schedule: RelayScheduleJob) {
    this.toasterService.toast("Saving schedule " + schedule.id, ToastType.INFO);
  }

  updateSchedule(schedule: RelayScheduleJob) {
    this.toasterService.toast("Updating schedule " + schedule.id, ToastType.INFO);
  }

  editSchedule(id: number) {
    this.toasterService.toast("Editing schedule " + id, ToastType.INFO);
  }

  deleteSchedule(id: number) {
    this.relayScheduleService.delete(id)
      .subscribe(
        data => this.removeSchedule(data),
        error => this.toasterService.toast("Error deleting relay schedule")
      );
  }

  toggleSchedule(schedule: RelayScheduleJob) {
    this.relayScheduleService.toggle(schedule.id, !schedule.enabled)
      .subscribe(
        data => schedule.enabled = !schedule.enabled,
        error => this.toasterService.toast("Error toggling schedule", ToastType.WARNING)
      );
  }

  private removeSchedule(schedule: RelayScheduleJob) {
    const temp: RelayScheduleJob = this.schedules.find(x => x.id === schedule.id);
    const index: number = this.schedules.indexOf(temp);
    this.schedules.splice(index);
  }

}
