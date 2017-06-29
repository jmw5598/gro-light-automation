import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { RPiComponentService } from '../../core/service/rpicomponent/rpicomponent.service';
import { RPiComponent } from '../../core/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '../../core/model/rpicomponent/rpicomponent-type.enum';

declare let EventSource:any;

@Component({
  selector: 'gro-readings-list',
  templateUrl: './readings-list.component.html',
  styleUrls: ['./readings-list.component.css']
})
export class ReadingsListComponent implements OnInit, OnDestroy {

  temperature: RPiComponent[] = [];
  humidity: RPiComponent[] = [];

  @Input()
  heading: string = 'Current Readings';

  private temperatureEvents;
  private humidityEvents;

  constructor(
    private rPiComponentService: RPiComponentService
  ) { }

  ngOnInit() {
    this.rPiComponentService.findAllByType(RPiComponentType.TEMPERATURE_HUMIDITY)
      .subscribe(
        data => {
          data.forEach(e => {
            this.temperature.push(
              new RPiComponent(e.id, e.alias, e.pin, RPiComponentType.TEMPERATURE_HUMIDITY));
            this.humidity.push(
              new RPiComponent(e.id, e.alias, e.pin, RPiComponentType.TEMPERATURE_HUMIDITY));
          })
        },
        error => console.log("error getting components") //replace with tost message?
      );

    this.temperatureEvents = new EventSource('http://192.168.1.7:8080/api/event/temperature');
    this.temperatureEvents
      .addEventListener('message', message => this.handleTemperatureEvent(message));

    this.humidityEvents = new EventSource('http://192.168.1.7:8080/api/event/humidity');
    this.humidityEvents
      .addEventListener('message', message => this.handleHumidityEvent(message));

  }

  ngOnDestroy() {
    this.humidityEvents.close();
    this.temperatureEvents.close();
  }

  private handleTemperatureEvent(message: any) {
    let json = JSON.parse(message.data);
    let obj:any = this.temperature.find(e => e.id === json.componentId);
    obj.current = json.temperature;
  }

  private handleHumidityEvent(message: any) {
    let json = JSON.parse(message.data);
    let obj: any = this.humidity.find(e => e.id === json.componentId);
    obj.current = json.humidity;
  }

}
