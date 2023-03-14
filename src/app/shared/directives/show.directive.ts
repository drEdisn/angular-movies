import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective {
  private element = this.el.nativeElement;

  @Input() elementClass: string = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('click')
  public showAll(): void {
    const cards = document.querySelector(this.elementClass) as HTMLElement;
    cards.classList.toggle('show');

    if (cards.classList.contains('show')) {
      this.element.textContent = 'Hide';
    } else {
      this.element.textContent = 'Show All';
    }
  }
}
