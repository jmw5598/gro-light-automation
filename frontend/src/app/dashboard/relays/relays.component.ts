import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RelayDTO } from '../../core/model/rpicomponent/relaydto.model';

import { RPiComponentService } from '../../core/service/rpicomponent/rpicomponent.service';
import { RelayService } from '../../core/service/relay/relay.service';

declare let EventSource:any;

@Component({
  selector: 'gro-relays',
  templateUrl: './relays.component.html',
  styleUrls: ['./relays.component.css']
})
export class RelaysComponent implements OnInit, OnDestroy {

  relays: RelayDTO[];
  private relayEvents;

  constructor(
    private rPiComponentService: RPiComponentService,
    private relayService: RelayService
  ) { }

  ngOnInit() {
    this.rPiComponentService
      .findAllRelays()
        .subscribe(
          data => {
            this.relays = data
            this.relays.forEach(e => this.relayService.poll(e));
          },
          error => console.log("error getting relays") // replace with toast message
        );

    this.relayEvents = new EventSource('http://192.168.1.7:8080/api/event/relay');
    this.relayEvents.addEventListener('message', message => {
      let relay = JSON.parse(message.data);
      let obj = this.relays.find(e => e.component.id === relay.component.id);
      obj.state =relay.state;
    });
  }

  ngOnDestroy() {
    this.relayEvents.close();
  }

  toggle(relay: RelayDTO) {
    if(relay.state === 'ON')
      relay.state = 'OFF'
    else if(relay.state === 'OFF')
      relay.state = 'ON';
    this.relayService.toggle(relay);
  }

}
