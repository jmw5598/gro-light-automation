import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents, routingGuards } from './app.routing';

import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { NavigationModule } from './navigation/navigation.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SettingsModule } from './settings/settings.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserModule,
    DashboardModule,
    HttpModule,
    LoginModule,
    NavigationModule,
    RouterModule,
    ScheduleModule,
    SettingsModule
  ],
  providers: [
    routingGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
