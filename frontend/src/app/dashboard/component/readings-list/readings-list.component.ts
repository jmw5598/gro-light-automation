import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { RPiComponentService } from '@app/core/service/rpicomponent/rpicomponent.service';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

import { SseService } from '@app/core/service/sse/sse.service';

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

  private temperatureSubscription;
  private humiditySubscription;
  private temperatureUnit: string = "celsius";

  constructor(
    private rPiComponentService: RPiComponentService,
    private sseService : SseService
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

      this.temperatureSubscription = this.sseService.temperatureState
        .subscribe(
          temperature => this.handleTemperatureEvent(temperature)
        );

      this.humiditySubscription = this.sseService.humidityState
        .subscribe(
          humidity => this.handleHumidityEvent(humidity)
        );
  }

  toggleTemperatureUnit() {
    if(this.temperatureUnit === 'celsius')
      this.temperatureUnit = 'fahrenheit';
    else
      this.temperatureUnit = 'celsius';
  }

  private handleTemperatureEvent(data: any) {
    let obj:any = this.temperature.find(e => e.id === data.componentId);
    obj.current = data.temperature;
  }

  private handleHumidityEvent(data: any) {
    let obj: any = this.humidity.find(e => e.id === data.componentId);
    obj.current = data.humidity;
  }

  ngOnDestroy() {
    this.temperatureSubscription.unsubscribe();
    this.humiditySubscription.unsubscribe();
  }

}
