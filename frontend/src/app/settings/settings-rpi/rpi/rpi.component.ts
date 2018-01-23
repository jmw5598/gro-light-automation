import { Component, OnInit, Input } from '@angular/core';

import { RPi } from '@app/shared/model/rpi/rpi.model';
@Component({
  selector: 'gro-rpi',
  templateUrl: './rpi.component.html',
  styleUrls: ['./rpi.component.css']
})
export class RPiComponent implements OnInit {

  @Input()
  rpi: RPi;

  constructor() { }

  ngOnInit() {
  }

}
