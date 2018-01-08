import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { HumiditySensor } from '@app/shared/model/rpicomponent/humidity-sensor/humidity-sensor.model';
import { HumiditySensorService } from '@app/core/service/humidity-sensor/humidity-sensor.service';
import { MoistureSensor } from '@app/shared/model/rpicomponent/moisture-sensor/moisture-sensor.model';
import { MoistureSensorService } from '@app/core/service/moisture-sensor/moisture-sensor.service';
import { ProximitySensor } from '@app/shared/model/rpicomponent/proximity-sensor/proximity-sensor.model';
import { ProximitySensorService } from '@app/core/service/proximity-sensor/proximity-sensor.service';
import { SseService } from '@app/core/service/sse/sse.service';
import { TemperatureSensor } from '@app/shared/model/rpicomponent/temperature-sensor/temperature-sensor.model';
import { TemperatureSensorService } from '@app/core/service/temperature-sensor/temperature-sensor.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'gro-readings-list',
  templateUrl: './readings-list.component.html',
  styleUrls: ['./readings-list.component.css']
})
export class ReadingsListComponent implements OnInit, OnDestroy {

  humidity: Array<HumiditySensor>;
  moisture: Array<MoistureSensor>;
  proximity: Array<ProximitySensor>;
  temperature: Array<TemperatureSensor>;

  @Input()
  heading: string = 'Current Readings';

  private temperatureSubscription;
  private humiditySubscription;
  private proximitySubscription;
  private moistureSubscription;
  private temperatureUnit: string = "celsius";

  constructor(
    private humiditySensorService: HumiditySensorService,
    private moistureSensorService: MoistureSensorService,
    private proximitySensorService: ProximitySensorService,
    private temperatureSensorService: TemperatureSensorService,
    private sseService : SseService,
    private toasterService: ToasterService
  ) {
    this.humidity = new Array<HumiditySensor>();
    this.moisture = new Array<MoistureSensor>();
    this.proximity = new Array<ProximitySensor>();
    this.temperature = new Array<TemperatureSensor>();
  }

  ngOnInit() {
    this.retrieveTemperatureSensors();
    this.retrieveProximitySensors();
    this.retrieveMoistureSensors();
  }

  toggleTemperatureUnit() {
    if(this.temperatureUnit === 'celsius')
      this.temperatureUnit = 'fahrenheit';
    else
      this.temperatureUnit = 'celsius';
  }

  private retrieveHumiditySensors() {
    this.humiditySensorService.findAll()
      .subscribe(
        data => {
          this.humidity = data;
          this.subscribeToHumidityEvents();
        },
        error => this.toasterService.toast('Unable to retrieve humidity sensors', ToastType.DANGER)
      );
  }

  private retrieveMoistureSensors() {
    this.moistureSensorService.findAll()
      .subscribe(
        data => {
          this.moisture = data;
          this.subscribeToMoistureEvents();
        },
        error => this.toasterService.toast('Unable to retrieve moisture sensors', ToastType.DANGER)
      );
  }

  private retrieveProximitySensors() {
    this.proximitySensorService.findAll()
      .subscribe(
        data => {
          this.proximity = data;
          this.subscribeToProximityEvents();
        },
        error => this.toasterService.toast('Unable to retreive proximity sensors', ToastType.DANGER)
      );
  }

  private retrieveTemperatureSensors() {
    this.temperatureSensorService.findAll()
      .subscribe(
        data => {
            this.temperature = data;
            this.subscribeToTemperatureEvents();
        },
        error => this.toasterService.toast('Unable to retrieve temperature sensors', ToastType.DANGER)
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
    let obj: any = this.moisture.find(e => e.id === data.component.id);
    obj.current = data.moisture;
  }

  ngOnDestroy() {
    if(this.temperatureSubscription)
      this.temperatureSubscription.unsubscribe();
    if(this.humiditySubscription)
      this.humiditySubscription.unsubscribe();
    if(this.proximitySubscription)
      this.proximitySubscription.unsubscribe();
    if(this.moistureSubscription)
      this.moistureSubscription.unsubscribe();
  }

}
