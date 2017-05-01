import { Component, OnInit } from '@angular/core';

import { RPiComponent } from '../core/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '../core/model/rpicomponent/rpicomponent-type.enum';
import { RPiComponentService } from '../core/service/rpicomponent/rpicomponent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  readingsHeading: string = 'Current Readings';

  relays: RPiComponent[];

  constructor(private rPiComponentService: RPiComponentService) { }

  ngOnInit() {
    this.rPiComponentService
      .findAllByType(RPiComponentType.RELAY)
        .subscribe(
          data => this.relays = data,
          error => console.log("error getting relays")
        );
  }

  onRelayToggle(relay: RPiComponent) {
    console.log('toggling relay: ' + relay.alias + ' ');
  }

  //******TEMP MOCK DATA**********

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

  //mock chart data
  public barChartOptions:any = {
    scales: {
      yAxes: []
    },
    legend : {
      labels: {
        fontColor: '#ebebeb'
      }
    },
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'High (*F)'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Low (*F)'}
  ];

  public barChartColors: Array<any> = [
    {
      hoverBackgroundColor: '#449d44',
      backgroundColor: '#5cb85c'
    },
    {
      hoverBackgroundColor: '#31b0d5',
      backgroundColor: '#5bc0de'
    }
  ];

}
