import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';

import { SettingsRPiComponentService } from '../settings-rpicomponent.service';

@Component({
  selector: 'gro-rpi-pinout',
  templateUrl: './rpi-pinout.component.html',
  styleUrls: ['./rpi-pinout.component.css']
})
export class RPiPinoutComponent implements OnInit, OnDestroy {

  selected: RPiComponent;
  private selectedSubscription;

  @Input()
  pins: Array<RPiPin>;

  constructor(
    private settingsRPiComponentService: SettingsRPiComponentService
  ) { }

  ngOnInit() {
    this.selectedSubscription = this.settingsRPiComponentService.selectedComponent
      .subscribe(
        data => this.selected = data,
        error => console.log("error subscribing to selected component")
      );
  }

  ngOnDestroy() {
    this.selectedSubscription.unsubscribe();
  }

}
