import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Relay } from './relay.model';

@Component({
  selector: 'gro-relays',
  templateUrl: './relays.component.html',
  styleUrls: ['./relays.component.css']
})
export class RelaysComponent implements OnInit {

  @Output()
  onRelayToggle: EventEmitter<Relay> = new EventEmitter<Relay>();

  @Input()
  relays: Relay[];

  constructor() { }

  ngOnInit() {
  }

  toggle(relay: Relay) {
    this.onRelayToggle.emit(relay);
  }

}
