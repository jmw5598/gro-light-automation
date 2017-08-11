import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ToastMessage } from './toast-message.model';
import { ToasterService } from './toaster.service';
import { ToasterLocation } from './toaster-location.enum';

@Component({
  selector: 'gro-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  private enqueue;
  private dequeue;
  messages: Array<ToastMessage>;

  @Input()
  location: ToasterLocation;

  constructor(
    private toasterService: ToasterService
  ) {
    this.messages = new Array<ToastMessage>();
    this.location = ToasterLocation.BOTTOM_RIGHT;
  }

  ngOnInit() {
    this.enqueue = this.toasterService.enqueue
      .subscribe(
        message => this.handleEnqueue(message),
        error => console.log('error receiving new message')
      )
    this.dequeue = this.toasterService.dequeue
      .subscribe(
        message => this.handleDequeue(message),
        error => console.log('error receiving message removal')
      )
  }

  private handleEnqueue(message: ToastMessage) {
    if(this.location === ToasterLocation.TOP_LEFT || this.location === ToasterLocation.TOP_RIGHT)
      this.messages.unshift(message);
    else
      this.messages.push(message);
  }

  private handleDequeue(message: ToastMessage) {
    const index = this.messages.indexOf(message, 0);
    if(index > -1)
      this.messages.splice(index, 1);
  }

}
