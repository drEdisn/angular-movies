import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {

  private element = this.el.nativeElement;
  
  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('click')
  showAll() {
    const cards = document.querySelector('.actors__cards') as HTMLElement;
    cards.classList.toggle('show');

    if (cards.classList.contains('show')) {
      this.element.textContent = 'Hide';
    } else {
      this.element.textContent = 'Show All';
    }
  }
}
