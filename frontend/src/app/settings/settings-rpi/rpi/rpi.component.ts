import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RPi } from '@app/shared/model/rpi/rpi.model';
import { SystemState } from '@app/shared/model/rpi/system-state.enum';
@Component({
  selector: 'gro-rpi',
  templateUrl: './rpi.component.html',
  styleUrls: ['./rpi.component.css']
})
export class RPiComponent implements OnInit {

  @Input()
  rpi: RPi;

  systemState = SystemState

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  view(id: number) {
    this.router.navigate(['/settings/rpi/', id]);
  }

}
