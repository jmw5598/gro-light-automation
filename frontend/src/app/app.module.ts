import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthenticationModule } from './_service/authentication/authentication.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NavigationComponent} from './navigation/navigation.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

// PROVIDERS
import { AuthenticationService } from './_service/authentication/authentication.service';
import { AuthenticationGuard } from './_service/authentication/guard/authentication.guard';
import { RoleGuard } from './_service/authentication/guard/role.guard';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    ScheduleComponent,
    LoginFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthenticationModule,
    routing
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    RoleGuard,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
