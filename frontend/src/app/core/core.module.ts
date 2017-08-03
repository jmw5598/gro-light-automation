import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DashboardService } from './service/dashboard/dashboard.service';
import { HumidityDataService } from './service/humidity-data/humidity-data.service';
import { NotificationService } from './service/notification/notification.service';
import { RelayService } from './service/relay/relay.service';
import { RPiComponentService } from './service/rpicomponent/rpicomponent.service';
import { TemperatureDataService } from './service/temperature-data/temperature-data.service';

import { SseService } from './service/sse/sse.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DashboardService,
    HumidityDataService,
    NotificationService,
    RelayService,
    RPiComponentService,
    TemperatureDataService,
    SseService
  ]
})
export class CoreModule { }
