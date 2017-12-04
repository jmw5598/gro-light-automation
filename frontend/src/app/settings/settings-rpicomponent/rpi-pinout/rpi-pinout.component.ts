import { Component, OnInit, Input } from '@angular/core';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';

@Component({
  selector: 'gro-rpi-pinout',
  templateUrl: './rpi-pinout.component.html',
  styleUrls: ['./rpi-pinout.component.css']
})
export class RPiPinoutComponent implements OnInit {

  @Input()
  selected: RPiComponent;

  @Input()
  pins: Array<RPiPin>;

  constructor() { }

  ngOnInit() {

  }

}
