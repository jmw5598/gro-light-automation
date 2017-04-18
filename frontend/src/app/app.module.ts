import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthenticationModule } from './_service/authentication/authentication.module';
import { AppRoutingModule, routingComponents, routingGuards } from './app.routing';
import { Ng2PageTransitionModule } from 'ng2-page-transition';
import { UiSwitchModule } from 'angular2-ui-switch';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavigationComponent} from './navigation/navigation.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AlertComponent } from './alert/alert.component';

import { AuthenticationService } from './_service/authentication/authentication.service';
import { UnauthorizedComponent } from './_component/unauthorized/unauthorized.component';
import { SettingsNavigationComponent } from './settings/settings-navigation/settings-navigation.component';
import { SettingsGeneralComponent } from './settings/settings-general/settings-general.component';
import { SettingsSensorComponent } from './settings/settings-sensor/settings-sensor.component';
import { SettingsRelayComponent } from './settings/settings-relay/settings-relay.component';
import { PanelListGroupComponent } from './_component/panel-list-group/panel-list-group.component';
import { RelaysComponent } from './dashboard/relays/relays.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavigationComponent,
    AlertComponent,
    routingComponents,
    UnauthorizedComponent,
    SettingsNavigationComponent,
    SettingsGeneralComponent,
    SettingsSensorComponent,
    SettingsRelayComponent,
    PanelListGroupComponent,
    RelaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthenticationModule,
    AppRoutingModule,
    Ng2PageTransitionModule,
    UiSwitchModule,
    ChartsModule
  ],
  providers: [
    AuthenticationService,
    routingGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
