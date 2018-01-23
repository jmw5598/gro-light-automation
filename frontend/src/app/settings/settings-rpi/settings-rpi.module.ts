import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RPiComponent } from './rpi/rpi.component';
import { RPiListComponent } from './rpi-list/rpi-list.component';
import { SettingsRPiComponent } from './settings-rpi.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SettingsRPiComponent
  ],
  declarations: [
    RPiComponent,
    RPiListComponent,
    SettingsRPiComponent
  ]
})
export class SettingsRPiModule { }
