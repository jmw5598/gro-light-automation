import { Directive, Input, ElementRef, HostListener, DoCheck } from '@angular/core';

@Directive({
  selector: '[groScrollable]'
})
export class ScrollableDirective implements DoCheck {

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

  ngDoCheck() {
    if(this.el.nativeElement.offsetHeight < this.triggerHeight)
      this.el.nativeElement.style.overflowY = 'hidden';
  }

}
