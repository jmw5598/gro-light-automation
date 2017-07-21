import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare let EventSource:any;

@Injectable()
export class SseService implements OnDestroy {

  private relay = new Subject<Object>();
  private humidity = new Subject<Object>();
  private temperature = new Subject<Object>();

  public relayState = this.relay.asObservable();
  public humidityState = this.humidity.asObservable();
  public temperatureState = this.temperature.asObservable();

  private relayEvents;
  private humidityEvents;
  private temperatureEvents;

  constructor() {

    // create single eventsource to /event
    // add listeners for 'temperature', 'humidity', 'relay' events.

    this.relayEvents = new EventSource('http://192.168.1.7:8080/api/event/relay');
    this.relayEvents.addEventListener('message', message => {
      let relay = JSON.parse(message.data);
      this.relay.next(relay);
    });

    this.temperatureEvents = new EventSource('http://192.168.1.7:8080/api/event/temperature');
    this.temperatureEvents.addEventListener('message', message => {
      let temperature = JSON.parse(message.data);
      this.temperature.next(temperature);
    });

    this.humidityEvents = new EventSource('http://192.168.1.7:8080/api/event/humidity');
    this.humidityEvents.addEventListener('message', message => {
      let humidity = JSON.parse(message.data);
      this.humidity.next(humidity);
    });

  }

  ngOnDestroy() {
      this.relayEvents.close();
      this.humidityEvents.close();
      this.temperatureEvents.close();
  }

}
