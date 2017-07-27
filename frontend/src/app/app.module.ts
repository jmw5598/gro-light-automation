import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardBuilderModule } from './dashboard-builder/dashboard-builder.module';
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
    DashboardBuilderModule,
    HttpModule,
    LoginModule,
    NavigationModule,
    RouterModule,
    ScheduleModule,
    SettingsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
