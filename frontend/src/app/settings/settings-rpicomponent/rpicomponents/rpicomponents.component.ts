import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { KeyToTitlePipe } from '@app/shared/pipe/key-to-title/key-to-title.pipe';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

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

  @Output()
  onHover: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  RPiComponentType = RPiComponentType  //needed to use enum in template

  constructor(private router: Router) { }

  ngOnInit() { }

  delete(id: number) {
    this.onComponentDelete.emit(id);
  }

  edit(id: number) {
    this.router.navigateByUrl('/settings/(settings:component/' + id + '/edit)');
  }

  hover(component: RPiComponent) {
    this.onHover.emit(component);
  }

}
