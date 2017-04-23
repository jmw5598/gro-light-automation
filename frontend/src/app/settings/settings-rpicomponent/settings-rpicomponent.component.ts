import { Component, OnInit } from '@angular/core';
import { RPICOMPONENTS, RPiComponent } from '../../_model/rpicomponent';

@Component({
  selector: 'gro-settings-rpicomponent',
  templateUrl: './settings-rpicomponent.component.html',
  styleUrls: ['./settings-rpicomponent.component.css']
})
export class SettingsRPiComponentComponent implements OnInit {
	
  components: RPiComponent[] = RPICOMPONENTS;

  constructor() { }

  ngOnInit() {
  }

}
