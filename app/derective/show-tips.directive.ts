import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appShowTips]'
})
export class ShowTipsDirective {

  constructor(private elementRef: ElementRef) {
  }

  @Input('appShowTips') showTips: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.appShowTips(this.showTips || 'grey');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.appShowTips(null);
  }

  private appShowTips(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
