import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RPiComponent } from './rpi/rpi.component';
import { RPiListComponent } from './rpi-list/rpi-list.component';
import { SettingsRPiComponent } from './settings-rpi.component';
import { RPiFormComponent } from './rpi-form/rpi-form.component';
import { RPiAddComponent } from './rpi-add/rpi-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SettingsRPiComponent
  ],
  declarations: [
    RPiAddComponent,
    RPiComponent,
    RPiFormComponent,
    RPiListComponent,
    SettingsRPiComponent
  ]
})
export class SettingsRPiModule { }
