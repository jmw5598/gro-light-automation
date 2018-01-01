import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RelayDTO } from '@app/shared/model/rpicomponent/relay/relaydto.model';
import { RelayState } from '@app/shared/model/rpicomponent/relay/relay-state.enum';

import { RelayService } from '@app/core/service/relay/relay.service';
import { SseService } from '@app/core/service/sse/sse.service';

@Component({
  selector: 'gro-relays',
  templateUrl: './relays.component.html',
  styleUrls: ['./relays.component.css']
})
export class RelaysComponent implements OnInit, OnDestroy {

  relays: Array<RelayDTO>;
  private relaySubscription;
  private relayState = RelayState;

  constructor(
    private relayService: RelayService,
    private sseService: SseService
  ) {
    this.relays = new Array<RelayDTO>();
  }

  ngOnInit() {
    this.relayService.findAll()
        .subscribe(
          data => {
            data.forEach((e) => this.relays.push(new RelayDTO(e, RelayState.DISABLED)));
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
    if(this.relaySubscription)
      this.relaySubscription.unsubscribe();
  }

  toggle(relay: RelayDTO) {
    if(relay.state === RelayState.ON)
      relay.state = RelayState.OFF;
    else if(relay.state === RelayState.OFF)
      relay.state = RelayState.ON;
    this.relayService.toggle(relay);
  }

  private handleRelayEvent(relay: any) {
    let obj = this.relays.find(e => e.component.id === relay.component.id);
    obj.state = relay.state;
  }

}
