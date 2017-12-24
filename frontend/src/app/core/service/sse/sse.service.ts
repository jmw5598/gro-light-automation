import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { BASE_API_URL } from '@app/core/service/base-api-url.default';

declare let EventSource:any;

@Injectable()
export class SseService implements OnDestroy {

  private relay = new Subject<Object>();
  private humidity = new BehaviorSubject<Object>(null);
  private temperature = new BehaviorSubject<Object>(null);
  private proximity = new BehaviorSubject<Object>(null);
  private moisture = new BehaviorSubject<Object>(null);
  private notification = new Subject<Object>();

  public relayState = this.relay.asObservable();
  public humidityState = this.humidity.asObservable();
  public temperatureState = this.temperature.asObservable();
  public proximityState = this.proximity.asObservable();
  public moistureState = this.moisture.asObservable();
  public notificationAlert = this.notification.asObservable();

  private events;

  constructor() {

    this.events = new EventSource(BASE_API_URL + 'event')

    this.events.addEventListener('message', message => {
      let json = JSON.parse(message.data);

      switch(json.event) {
        case 'temperature':
          this.temperature.next(json.payload);
          break;
        case 'humidity':
          this.humidity.next(json.payload)
          break;
        case 'relay':
          this.relay.next(json.payload);
          break;
        case 'proximity':
          this.proximity.next(json.payload);
          break;
        case 'moisture':
          this.moisture.next(json.payload);
          break;
        case 'notification':
          this.notification.next(json.payload);
          break;
        default:
          break;
      }

    });

  }

  ngOnDestroy() {
      this.events.close();
  }

}
