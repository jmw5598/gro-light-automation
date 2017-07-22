import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare let EventSource:any;

@Injectable()
export class SseService implements OnDestroy {

  private relay = new Subject<Object>();
  private humidity = new Subject<Object>();
  private temperature = new Subject<Object>();
  private proximity = new Subject<Object>();
  private moisture = new Subject<Object>();

  public relayState = this.relay.asObservable();
  public humidityState = this.humidity.asObservable();
  public temperatureState = this.temperature.asObservable();
  public proximityState = this.proximity.asObservable();
  public moistureState = this.moisture.asObservable();

  private events;

  constructor() {

    this.events = new EventSource('http://192.168.1.7:8080/api/event')

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
          this.relay.next(json.payload)
          break;
        case 'proximity':
          this.proximity.next(json.payload);
          break;
        case 'moisture':
          this.moisture.next(json.payload);
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
