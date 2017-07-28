import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [ScheduleComponent],
  declarations: [ScheduleComponent]
})
export class ScheduleModule {}
