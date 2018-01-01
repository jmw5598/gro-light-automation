import { Component, OnInit } from '@angular/core';
import { PageLoading } from '../shared/component/page-loader/page-loading';
import { RPiComponent } from '../shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '../shared/model/rpicomponent/rpicomponent-type.enum';
import { SimpleReadingConfiguration } from '@app/shared/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading.configuration';
import { SensorReadingType } from '@app/shared/model/dashboard/configuration/shared/sensor-reading-type.enum';
import { SimpleReadingColor } from '@app/shared/model/dashboard/configuration/widget/sensor/simple-reading/simple-reading-color.enum';

import { SimpleRelayConfiguration } from '@app/shared/model/dashboard/configuration/widget/control/simple-relay/simple-relay.configuration';
import { SimpleRelayColor } from '@app/shared/model/dashboard/configuration/widget/control/simple-relay/simple-relay-color.enum';
import { RelayDTO } from '../shared/model/rpicomponent/relay/relaydto.model';
import { RelayState } from '../shared/model/rpicomponent/relay/relay-state.enum';
import { DASHBOARD_DEFAULT } from '@app/shared/model/dashboard/dashboard.default';

@Component({
  selector: 'gro-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends PageLoading implements OnInit {

  constructor() {
    super(true);
  }

  ngOnInit() {
    this.standby();
    setTimeout(() => this.ready(), 1000);
    console.log(DASHBOARD_DEFAULT);
  }
}
