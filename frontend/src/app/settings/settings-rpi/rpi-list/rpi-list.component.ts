import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RPi } from '@app/shared/model/rpi/rpi.model';

@Component({
  selector: 'gro-rpi-list',
  templateUrl: './rpi-list.component.html',
  styleUrls: ['./rpi-list.component.css']
})
export class RPiListComponent implements OnInit {

  @Input()
  rpis: Array<RPi>;

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(id: number) {
    this.onDelete.emit(id);
  }

}
