import { NgModule } from '@angular/core';

import { HumiditySensorFindAllResolve } from './humidity-sensor-find-all.resolve';
import { HumiditySensorFindOneResolve } from './humidity-sensor-find-one.resolve';
import { MoistureSensorFindAllResolve } from './moisture-sensor-find-all.resolve';
import { MoistureSensorFindOneResolve } from './moisture-sensor-find-one.resolve';
import { ProximitySensorFindAllResolve } from './proximity-sensor-find-all.resolve';
import { ProximitySensorFindOneResolve } from './proximity-sensor-find-one.resolve';
import { TemperatureSensorFindAllResolve } from './temperature-sensor-find-all.resolve';
import { TemperatureSensorFindOneResolve } from './temperature-sensor-find-one.resolve';

@NgModule({
  providers: [
    HumiditySensorFindAllResolve,
    HumiditySensorFindOneResolve,
    MoistureSensorFindAllResolve,
    MoistureSensorFindOneResolve,
    ProximitySensorFindAllResolve,
    ProximitySensorFindOneResolve,
    TemperatureSensorFindAllResolve,
    TemperatureSensorFindOneResolve
  ]
})
export class CoreResolveModule {}
