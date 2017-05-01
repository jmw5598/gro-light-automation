import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'angular2-ui-switch';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule, routingComponents, routingGuards } from './app.routing';

import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { NavigationModule } from './navigation/navigation.module';
import { SettingsModule } from './settings/settings.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserModule,
    ChartsModule,
    CoreModule,
    DashboardModule,
    FormsModule,
    HttpModule,
    LoginModule,
    NavigationModule,
    ReactiveFormsModule,
    SettingsModule,
    UiSwitchModule
  ],
  providers: [
    routingGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
