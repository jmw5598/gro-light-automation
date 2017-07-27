import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { RelayDTO } from '../../../shared/model/rpicomponent/relaydto.model';
import { RelayService } from '../../../core/service/relay/relay.service';
import { RelayState } from '../../../shared/model/rpicomponent/relay-state.enum';
import { SimpleRelayConfiguration } from '../../model/configuration/widget/control/simple-relay/simple-relay.configuration';
import { SseService } from '../../../core/service/sse/sse.service';

import { KeyToTitlePipe } from '../../../shared/pipe/key-to-title/key-to-title.pipe';

@Component({
  selector: 'gro-simple-relay',
  templateUrl: './simple-relay.component.html',
  styleUrls: ['./simple-relay.component.css']
})
export class SimpleRelayComponent implements OnInit, OnDestroy {

  @Input()
  configuration: SimpleRelayConfiguration;

  private subscription;
  private relayState = RelayState;

  constructor(
    private sseService: SseService,
    private relayService: RelayService
  ) {}

  ngOnInit() {
    this.subscription = this.sseService
      .relayState
        .subscribe(
          relay => this.handleRelayEvents(relay)
        );
    this.relayService.poll(this.configuration.relay);
  }

  toggle (relay: RelayDTO) {
    if(relay.state === RelayState.ON)
      relay.state = RelayState.OFF;
    else if(relay.state === RelayState.OFF)
      relay.state = RelayState.ON;
    this.relayService.toggle(relay);
  }

  private handleRelayEvents(relay) {
    // possible pass in relay DTO object (need to fix sse service)
    // or create RelayDTO
    // check if relay id is = configuration.relay.component.id
    // if it is set configuration.relay.state = relay.state
    if(this.configuration.relay.component.id === relay.component.id)
      this.configuration.relay.state = relay.state;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
