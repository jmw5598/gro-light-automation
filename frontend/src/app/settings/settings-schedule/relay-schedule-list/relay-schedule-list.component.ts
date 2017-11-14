import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RelayScheduleJob } from '@app/shared/model/rpicomponent/relay-schedule-job.model';

@Component({
  selector: 'gro-relay-schedule-list',
  templateUrl: './relay-schedule-list.component.html',
  styleUrls: ['./relay-schedule-list.component.css']
})
export class RelayScheduleListComponent implements OnInit {
  scheduleType: string = "FIXED";
  @Input()
  schedules: Array<RelayScheduleJob>;

  @Output()
  deleteSchedule: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  editSchedule: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  toggleSchedule: EventEmitter<RelayScheduleJob> = new EventEmitter<RelayScheduleJob>();

  constructor() { }

  ngOnInit() {
  }

  delete(id: number) {
    this.deleteSchedule.emit(id);
  }

  edit(id: number) {
    this.editSchedule.emit(id);
  }

  toggleEnabled(schedule: RelayScheduleJob) {
    this.toggleSchedule.emit(schedule);
  }

}
