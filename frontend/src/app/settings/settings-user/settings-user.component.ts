import { Component, OnInit } from '@angular/core';

import { PageLoading } from '@app/shared/component/page-loader/page-loading';

@Component({
  selector: 'gro-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.css']
})
export class SettingsUserComponent extends PageLoading implements OnInit {

  constructor() {
    super(true);
  }

  ngOnInit() {
    setTimeout(() => this.ready(), 1000);
  }

}
