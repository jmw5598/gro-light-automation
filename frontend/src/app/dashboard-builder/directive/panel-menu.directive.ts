import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[groPanelMenu]'
})
export class PanelMenuDirective {

  constructor(
    private element: ElementRef,
    private renderer : Renderer
  ) {
    console.log(element);
  }

}
