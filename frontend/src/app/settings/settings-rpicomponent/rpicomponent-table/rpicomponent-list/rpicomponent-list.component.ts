import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';

@Component({
  selector: '[gro-rpicomponent-list]',
  templateUrl: './rpicomponent-list.component.html',
  styleUrls: ['./rpicomponent-list.component.css']
})
export class RPiComponentListComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  components: Array<any>;

  @Output()
  onHover: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  constructor(private router: Router) {
    this.type = 'RPiComponent';
  }

  ngOnInit() {}

  hover(component: RPiComponent) {
    this.onHover.emit(component);
  }

  edit(id: number) {
    this.router.navigate(['/settings/component/', id]);
  }

}
