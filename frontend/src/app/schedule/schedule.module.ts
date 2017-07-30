import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SCHEDULE_ROUTES } from '@app/schedule/schedule.routing';

import { SharedModule } from '@app/shared/shared.module';

import { ScheduleComponent } from './schedule.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(SCHEDULE_ROUTES)
  ],
  exports: [ScheduleComponent],
  declarations: [ScheduleComponent]
})
export class ScheduleModule {}
