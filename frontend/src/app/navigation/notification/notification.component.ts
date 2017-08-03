import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Notification } from '@app/shared/model/notification/notification.model';

@Component({
  selector: 'gro-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input()
  notification: Notification;

  @Output()
  onDeleteNotification: EventEmitter<Notification> = new EventEmitter<Notification>();

  private detailsShown: boolean;

  constructor() {
    this.detailsShown = false;
  }

  ngOnInit() {
  }

  toggleDetails() {
    this.detailsShown = !this.detailsShown;
  }

  delete(notification: Notification) {
    this.onDeleteNotification.emit(notification);
  }

}
