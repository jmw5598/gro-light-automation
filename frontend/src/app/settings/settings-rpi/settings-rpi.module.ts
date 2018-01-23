import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpiComponent } from './rpi/rpi.component';
import { RpiListComponent } from './rpi-list/rpi-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RpiComponent, RpiListComponent]
})
export class SettingsRpiModule { }
