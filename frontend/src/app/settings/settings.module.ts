import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SETTINGS_ROUTES } from '@app/settings/settings.routing';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { RPiComponentAddComponent } from './rpicomponent-add/rpicomponent-add.component';
import { RPiComponentEditComponent } from './rpicomponent-edit/rpicomponent-edit.component';
import { RPiComponentsComponent } from './rpicomponents/rpicomponents.component';
import { SettingsComponent } from './settings.component';
import { SettingsNavigationComponent } from './settings-navigation/settings-navigation.component';
import { SettingsRPiComponentComponent } from './settings-rpicomponent/settings-rpicomponent.component';
import { SettingsScheduleComponent } from './settings-schedule/settings-schedule.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  exports: [SettingsComponent],
  declarations: [
    RPiComponentAddComponent,
    RPiComponentEditComponent,
    RPiComponentsComponent,
    SettingsComponent,
    SettingsNavigationComponent,
    SettingsRPiComponentComponent,
    SettingsScheduleComponent,
    SettingsUserComponent
  ]
})
export class SettingsModule {}
