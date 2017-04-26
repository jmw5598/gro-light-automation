import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RPiComponent } from '../../_model/rpicomponent';
import { RPiComponentType } from '../../_model/rpicomponent-type.enum';

@Component({
  selector: 'gro-rpicomponents',
  templateUrl: './rpicomponents.component.html',
  styleUrls: ['./rpicomponents.component.css']
})
export class RPiComponentsComponent implements OnInit {
  
  @Input()
  components: RPiComponent[];

  @Output()
  onComponentDelete: EventEmitter<number> = new EventEmitter<number>();

  RPiComponentType = RPiComponentType  //needed to use enum in template

  constructor() { }

  ngOnInit() { }

  delete(id: number) {
    this.onComponentDelete.emit(id);
  }

}
