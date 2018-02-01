import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RPi } from '@app/shared/model/rpi/rpi.model';
import { RPiService } from '@app/core/service/rpi/rpi.service';
import { SystemState } from '@app/shared/model/rpi/system-state.enum';

import { BASE_IMAGE_URL } from '@app/core/service/base-api-url.default';

@Component({
  selector: 'gro-rpi',
  templateUrl: './rpi.component.html',
  styleUrls: ['./rpi.component.css']
})
export class RPiComponent implements OnInit {

  @Input()
  rpi: RPi;

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter<number>();

  systemState = SystemState
  baseImageUrl = BASE_IMAGE_URL;

  constructor(
    private router: Router,
    private rpiService: RPiService
  ) { }

  ngOnInit() {

  }

  view(id: number) {
    this.router.navigate(['/settings/rpi/', id]);
  }

  delete(id: number) {
    this.onDelete.emit(id);
  }

}
