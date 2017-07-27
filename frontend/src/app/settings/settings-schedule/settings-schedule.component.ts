import { Component, OnInit } from '@angular/core';
import { PageLoading } from '../../core/component/page-loader/page-loading';

@Component({
  selector: 'gro-settings-schedule',
  templateUrl: './settings-schedule.component.html',
  styleUrls: ['./settings-schedule.component.css']
})
export class SettingsScheduleComponent extends PageLoading implements OnInit {

  constructor() {
    super(true);
  }

  ngOnInit() {
    this.standby();
    setTimeout(() => this.ready(), 1000);
  }

}
