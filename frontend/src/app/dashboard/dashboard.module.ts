import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { RelaysComponent } from './relays/relays.component';

@NgModule({
  declarations: [RelaysComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}