import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RelayDTO } from '../../../core/model/rpicomponent/relaydto.model';

import { RPiComponentService } from '../../../core/service/rpicomponent/rpicomponent.service';
import { RelayService } from '../../../core/service/relay/relay.service';

import { SseService } from '../../../core/service/sse/sse.service';

@Component({
  selector: 'gro-relays',
  templateUrl: './relays.component.html',
  styleUrls: ['./relays.component.css']
})
export class RelaysComponent implements OnInit, OnDestroy {

  relays: RelayDTO[];
  private relaySubscription;

  constructor(
    private rPiComponentService: RPiComponentService,
    private relayService: RelayService,
    private sseService: SseService
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

    this.relaySubscription = this.sseService.relayState
      .subscribe(
        relay => this.handleRelayEvent(relay)
      );
  }

  ngOnDestroy() {
    this.relaySubscription.unsubscribe();
  }

  toggle(relay: RelayDTO) {
    if(relay.state === 'ON')
      relay.state = 'OFF'
    else if(relay.state === 'OFF')
      relay.state = 'ON';
    this.relayService.toggle(relay);
  }

  private handleRelayEvent(relay: any) {
    let obj = this.relays.find(e => e.component.id === relay.component.id);
    obj.state = relay.state;
  }

}
