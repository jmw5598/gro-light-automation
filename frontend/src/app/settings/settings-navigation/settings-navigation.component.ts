import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'gro-settings-navigation',
  templateUrl: './settings-navigation.component.html',
  styleUrls: ['./settings-navigation.component.css']
})
export class SettingsNavigationComponent implements OnInit {

  @Output()
  onViewChange = new EventEmitter<string>();

  @Input()
  view: string;

  constructor() { }

  ngOnInit() {
  }

  changeView (view: string): void {
    this.onViewChange.emit(view);
  }

}
