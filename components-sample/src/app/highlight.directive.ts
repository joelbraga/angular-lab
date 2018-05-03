import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  appHighlight: string;

  constructor(public el: ElementRef) {
      console.log(el);
   }

   @HostListener('mouseenter') onmouseenter() {
     console.log('mouseenter');
     this.el.nativeElement.style.color = this.appHighlight;
   }

   @HostListener('mouseleave') onmouseleave() {
    console.log('mouseleave');
    this.el.nativeElement.style.color = null;
  }
}
