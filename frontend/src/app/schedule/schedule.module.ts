import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [ScheduleComponent],
  declarations: [ScheduleComponent]
})
export class ScheduleModule {}