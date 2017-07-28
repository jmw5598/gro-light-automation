import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';
import { SimpleReadingConfiguration } from '@app/dashboard/model/configuration/widget/sensor/simple-reading/simple-reading.configuration';
import { SensorReadingType } from '@app/dashboard/model/configuration/shared/sensor-reading-type.enum';
import { SseService } from '@app/core/service/sse/sse.service';

@Component({
  selector: 'gro-simple-reading',
  templateUrl: './simple-reading.component.html',
  styleUrls: ['./simple-reading.component.css']
})
export class SimpleReadingComponent implements OnInit, OnDestroy {

  private sensorReadingType = SensorReadingType;

  @Input()
  configuration: SimpleReadingConfiguration;

  private subscription;

  constructor(private sseService: SseService) {
    this.configuration = new SimpleReadingConfiguration(new RPiComponent(
      1,"Inside DHT22", 22, RPiComponentType.TEMPERATURE_HUMIDITY,
    ));
  }

  ngOnInit() {
    switch(this.configuration.type) {
      case SensorReadingType.HUMIDITY:
        this.subscribeToHumidityEvents();
        break;
      case SensorReadingType.TEMPERATURE:
        this.subscribeToTemperatureEvents();
        break;
      case SensorReadingType.PROXIMITY:
        this.subscribeToProximityEvents();
        break;
      case SensorReadingType.MOISTURE:
        this.subscribeToMoiustureEvents();
        break;
      default:
        break;
    }
  }

  private subscribeToHumidityEvents() {
    this.subscription = this.sseService
      .humidityState
        .subscribe(
          humidity => this.handleHumidityEvents(humidity)
        );
  }

  private subscribeToTemperatureEvents() {
    this.subscription = this.sseService
      .temperatureState
        .subscribe(
          temperature => this.handleTemperatureEvents(temperature)
        );

  }

  private subscribeToProximityEvents() {
    this.subscription = this.sseService
      .proximityState
        .subscribe(
          proximity => this.handleProximityEvents(proximity)
        );
  }

  private subscribeToMoiustureEvents() {
    this.subscription = this.sseService
      .moistureState
        .subscribe(
          moisture => this.handleMoistureEvents(moisture)
        );
  }

  private handleHumidityEvents(object) {
    if(this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.humidity;
  }

  private handleTemperatureEvents(object) {
    if(this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.temperature;
  }

  private handleProximityEvents(object) {
    if(this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.proximity;
  }

  private handleMoistureEvents(object) {
    if(this.configuration.component.id === object.componentId)
      this.configuration.component.current = object.moisture;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
