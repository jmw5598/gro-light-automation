import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { RPiComponentService } from '@app/core/service/rpicomponent/rpicomponent.service';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

import { SseService } from '@app/core/service/sse/sse.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'gro-readings-list',
  templateUrl: './readings-list.component.html',
  styleUrls: ['./readings-list.component.css']
})
export class ReadingsListComponent implements OnInit, OnDestroy {

  temperature: Array<RPiComponent>;
  humidity: Array<RPiComponent>;
  proximity: Array<RPiComponent>;
  moisture: Array<RPiComponent>;

  @Input()
  heading: string = 'Current Readings';

  private temperatureSubscription;
  private humiditySubscription;
  private proximitySubscription;
  private moistureSubscription;
  private temperatureUnit: string = "celsius";

  constructor(
    private rPiComponentService: RPiComponentService,
    private sseService : SseService,
    private toasterService: ToasterService
  ) {
    this.temperature = new Array<RPiComponent>();
    this.humidity = new Array<RPiComponent>();
    this.proximity = new Array<RPiComponent>();
    this.moisture = new Array<RPiComponent>();
  }

  ngOnInit() {
    this.retrieveTemperatureHumitiyComponents();
    this.retrieveProximityComponents();
    this.retrieveMoistureComponents();
  }

  toggleTemperatureUnit() {
    if(this.temperatureUnit === 'celsius')
      this.temperatureUnit = 'fahrenheit';
    else
      this.temperatureUnit = 'celsius';
  }

  private retrieveTemperatureHumitiyComponents() {
    this.rPiComponentService.findAllByType(RPiComponentType.TEMPERATURE_HUMIDITY)
      .subscribe(
        data => {
          data.forEach(e => {
            this.temperature.push(
              new RPiComponent(e.id, e.alias, e.pin, RPiComponentType.TEMPERATURE_HUMIDITY));
            this.humidity.push(
              new RPiComponent(e.id, e.alias, e.pin, RPiComponentType.TEMPERATURE_HUMIDITY));
            this.subscribeToTemperatureEvents();
            this.subscribeToHumidityEvents();
          })
        },
        error => this.toasterService.toast('Unable to retrieve temperature & humidity components', ToastType.DANGER)
      );
  }

  private retrieveProximityComponents() {
    this.rPiComponentService.findAllByType(RPiComponentType.PROXIMITY)
      .subscribe(
        data => {
          data.forEach(e => this.proximity.push(
            new RPiComponent(e.id, e.alias, e.pin, RPiComponentType.PROXIMITY)
          ))
        },
        error => this.toasterService.toast('Unable to retreive proximity components', ToastType.DANGER)
      );
  }

  private retrieveMoistureComponents() {
    this.rPiComponentService.findAllByType(RPiComponentType.MOISTURE)
      .subscribe(
        data => {
          data.forEach(e => this.moisture.push(
            new RPiComponent(e.id, e.alias, e.pin, RPiComponentType.MOISTURE)
          ))
        },
        error => this.toasterService.toast('Unable to retrieve moisture components', ToastType.DANGER)
      );
  }

  private subscribeToTemperatureEvents() {
    this.temperatureSubscription = this.sseService.temperatureState
      .subscribe(
        temperature => this.handleTemperatureEvent(temperature)
      );
  }

  private subscribeToHumidityEvents() {
    this.humiditySubscription = this.sseService.humidityState
      .subscribe(
        humidity => this.handleHumidityEvent(humidity)
      );
  }

  private subscribeToProximityEvents() {
    this.proximitySubscription = this.sseService.proximityState
      .subscribe(
        proximity => this.handleProximityEvent(proximity)
      );
  }

  private subscribeToMoistureEvents() {
    this.moistureSubscription = this.sseService.moistureState
      .subscribe(
        moisture => this.handleMoistureEvent(moisture)
      )
  }

  private handleTemperatureEvent(data: any) {
    let obj:any = this.temperature.find(e => e.id === data.componentId);
    obj.current = data.temperature;
  }

  private handleHumidityEvent(data: any) {
    let obj: any = this.humidity.find(e => e.id === data.componentId);
    obj.current = data.humidity;
  }

  private handleProximityEvent(data: any) {
    let obj: any = this.proximity.find(e => e.id === data.component.id);
    obj.current = data.distance;
  }

  private handleMoistureEvent(data: any) {
    let obj: any = this.proximity.find(e => e.id === data.component.id);
    obj.current = data.moisture;
  }

  ngOnDestroy() {
    this.temperatureSubscription.unsubscribe();
    this.humiditySubscription.unsubscribe();
    this.proximitySubscription.unsubscribe();
    this.moistureSubscription.unsubscribe();
  }

}
