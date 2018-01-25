import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RPiAddComponent } from './rpi-add/rpi-add.component';
import { RPiComponent } from './rpi/rpi.component';
import { RPiDetailsComponent } from './rpi-details/rpi-details.component';
import { RPiFormComponent } from './rpi-form/rpi-form.component';
import { RPiListComponent } from './rpi-list/rpi-list.component';
import { SettingsRPiComponent } from './settings-rpi.component';

import { SETTINGS_RPI_ROUTES } from './settings-rpi.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_RPI_ROUTES)
  ],
  exports: [
    SettingsRPiComponent
  ],
  declarations: [
    RPiAddComponent,
    RPiComponent,
    RPiDetailsComponent,
    RPiFormComponent,
    RPiListComponent,
    SettingsRPiComponent
  ]
})
export class SettingsRPiModule { }
