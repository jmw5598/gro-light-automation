import { NgModule } from '@angular/core';

import { DashboardService } from './dashboard/dashboard.service';
import { HumidityDataService } from './humidity-data/humidity-data.service';
import { HumiditySensorService } from './humidity-sensor/humidity-sensor.service';
import { MoistureSensorService } from './moisture-sensor/moisture-sensor.service';
import { NotificationService } from './notification/notification.service';
import { ProximitySensorService } from './proximity-sensor/proximity-sensor.service';
import { RelayService } from './relay/relay.service';
import { RelayScheduleService } from './relay/relay-schedule.service';
import { RPiService } from './rpi/rpi.service';
import { RPiComponentService } from './rpicomponent/rpicomponent.service';
import { RPiPinService } from './rpipin/rpi-pin.service';
import { SseService } from './sse/sse.service';
import { TemperatureDataService } from './temperature-data/temperature-data.service';
import { TemperatureHumiditySensorService } from './temperature-humidity-sensor/temperature-humidity-sensor.service';
import { TemperatureSensorService } from './temperature-sensor/temperature-sensor.service';

@NgModule({
  providers: [
    DashboardService,
    HumidityDataService,
    HumiditySensorService,
    MoistureSensorService,
    NotificationService,
    ProximitySensorService,
    RelayService,
    RelayScheduleService,
    RPiService,
    RPiComponentService,
    RPiPinService,
    SseService,
    TemperatureDataService,
    TemperatureHumiditySensorService,
    TemperatureSensorService
  ]
})
export class CoreServiceModule {}
