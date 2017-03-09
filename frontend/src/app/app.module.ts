import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthenticationModule } from './_service/authentication/authentication.module';
import { AppRoutingModule, routingComponents, routingGuards } from './app.routing';
import { Ng2PageTransitionModule } from 'ng2-page-transition';

import { AppComponent } from './app.component';
import { NavigationComponent} from './navigation/navigation.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AlertComponent } from './alert/alert.component';

import { AuthenticationService } from './_service/authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavigationComponent,
    AlertComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AuthenticationModule,
    AppRoutingModule,
    Ng2PageTransitionModule
  ],
  providers: [
    AuthenticationService,
    routingGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
