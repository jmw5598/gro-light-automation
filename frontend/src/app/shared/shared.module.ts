import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'angular2-ui-switch';

@NgModule({
  exports: [
  	CommonModule,
  	FormsModule,
  	ReactiveFormsModule,
  	RouterModule,
  	UiSwitchModule
  ]
})
export class SharedModule { }
