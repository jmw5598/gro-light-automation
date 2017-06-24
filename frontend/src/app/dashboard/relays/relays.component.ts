import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RelayDTO } from '../../core/model/rpicomponent/relaydto.model';

@Component({
  selector: 'gro-relays',
  templateUrl: './relays.component.html',
  styleUrls: ['./relays.component.css']
})
export class RelaysComponent implements OnInit {

  @Output()
  onRelayToggle: EventEmitter<RelayDTO> = new EventEmitter<RelayDTO>();

  @Input()
  relays: RelayDTO[];

  constructor() { }

  ngOnInit() { }

  toggle(relay: RelayDTO) {
    if(relay.state === 'ON')
      relay.state = 'OFF'
    else if(relay.state === 'OFF')
      relay.state = 'ON';
    this.onRelayToggle.emit(relay);
  }

}
