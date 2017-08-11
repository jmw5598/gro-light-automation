import { Component, OnInit, Input } from '@angular/core';

import { ToastMessage } from '../toast-message.model';
import { ToastType } from '../toast-type.enum';

@Component({
  selector: 'gro-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css']
})
export class ToastMessageComponent implements OnInit {

  @Input()
  message: ToastMessage;
  dismissed: boolean = false;

  private toastType = ToastType;

  constructor() {
    this.message = new ToastMessage(ToastType.DANGER, "A blank toast message was created");
  }

  ngOnInit() {
  }

  dismiss() {
    this.dismissed = true;
  }

}
