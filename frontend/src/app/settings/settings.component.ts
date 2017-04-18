import { Component, OnInit } from '@angular/core';
import { SettingsNavigationComponent } from './settings-navigation/settings-navigation.component';

@Component({
  selector: 'gro-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  view: string;

  constructor() {
    this.view = 'general';
  }

  ngOnInit() {
  }

  onViewChange(view: string): void {
    this.view = view;
  }

}
