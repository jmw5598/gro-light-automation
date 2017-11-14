import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'angular2-ui-switch';

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
import { RelayScheduleFormComponent } from './settings-schedule/relay-schedule-form/relay-schedule-form.component';
import { RelayScheduleListComponent } from './settings-schedule/relay-schedule-list/relay-schedule-list.component';


@NgModule({
  imports: [
    SharedModule,
    UiSwitchModule,
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
    SettingsUserComponent,
    RelayScheduleFormComponent,
    RelayScheduleListComponent
  ]
})
export class SettingsModule {}
