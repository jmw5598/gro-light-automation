import { Component, OnInit, Input } from '@angular/core';

import { Notification } from '@app/shared/model/notification/notification.model';

@Component({
  selector: 'gro-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  @Input()
  notifications: Array<Notification>;

  constructor() {
    this.notifications = new Array<Notification>();
  }

  ngOnInit() {
  }

}
