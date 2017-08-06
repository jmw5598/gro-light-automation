import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[groScrollable]'
})
export class ScrollableDirective {

  @Input()
  triggerHeight: number;

  constructor(public el: ElementRef) {
    this.triggerHeight = 450;
    el.nativeElement.style.overflow = 'hidden';
  }

  @HostListener('mouseenter')
  addScrollbar() {
    if(this.el.nativeElement.offsetHeight > this.triggerHeight)
      this.el.nativeElement.style.overflowY = 'scroll';
  }

  @HostListener('mouseleave')
  removeScrollbar() {
    this.el.nativeElement.style.overflowY = 'hidden';
  }
}
