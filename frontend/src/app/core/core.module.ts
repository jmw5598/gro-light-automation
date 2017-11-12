import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasterComponent } from './component/toaster/toaster.component';
import { ToastMessageComponent } from './component/toaster/toast-message/toast-message.component';

import { DashboardService } from './service/dashboard/dashboard.service';
import { HumidityDataService } from './service/humidity-data/humidity-data.service';
import { NotificationService } from './service/notification/notification.service';
import { RelayService } from './service/relay/relay.service';
import { RPiComponentService } from './service/rpicomponent/rpicomponent.service';
import { TemperatureDataService } from './service/temperature-data/temperature-data.service';

import { SseService } from './service/sse/sse.service';
import { ToasterService } from './component/toaster/toaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ToasterComponent
  ],
  declarations: [
    ToasterComponent,
    ToastMessageComponent
  ],
  providers: [
    DashboardService,
    HumidityDataService,
    NotificationService,
    RelayService,
    RPiComponentService,
    TemperatureDataService,
    SseService,
    ToasterService
  ]
})
export class CoreModule { }
