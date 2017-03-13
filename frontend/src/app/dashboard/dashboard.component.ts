import { Component, OnInit } from '@angular/core';
import { Relay } from './relays/relay.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // MOCK READING DATA
  readings: Object[] = [
    {
      'label' : 'Temperature',
      'value' : '75* F'
    },
    {
      'label' : 'Humidity',
      'value' : '44%'
    },
    {
      'label' : 'Nutrients',
      'value' : '4cm'
    }
  ];
  // MOCK HEADING DATA
  readingsHeading: string = 'Current Readings';

  // MOCK RELAY DATA
  relays: Relay[] = [
    {
      id: 1,
      pinNum: 1,
      alias: 'Light 1',
      enabled: false
    },
    {
      id: 2,
      pinNum: 17,
      alias: 'Light 2',
      enabled: true
    },
    {
      id: 1,
      pinNum: 10,
      alias: 'Fan 1',
      enabled: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onRelayToggle(relay: Relay) {
    console.log('toggling relay: ' + relay.alias + ' ' + relay.enabled);
  }

}
