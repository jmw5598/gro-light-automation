import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'gro-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
