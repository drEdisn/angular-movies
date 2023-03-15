import { Lang } from 'src/app/main/enums/lang.enum';
import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { ButtonLangs } from 'src/app/actor-page/models/button-lang.movel';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective implements OnInit, OnChanges {
  private element = this.el.nativeElement;
  private lang: ButtonLangs = {
    en: {
      show: 'Show all',
      hide: 'Hide',
    },
    ru: {
      show: 'Показать все',
      hide: 'Скрыть',
    }
  }

  @Input() elementClass: string = '';
  @Input() currentLang: string | null = Lang.en;

  constructor(
    private el: ElementRef<HTMLElement>,
  ) {}

  public ngOnInit(): void {
    this.showAll(true);
  }

  public ngOnChanges(): void {
    this.showAll(true);
  }

  @HostListener('click')
  public showAll(isChange = false): void {
    const cards = document.querySelector(this.elementClass) as HTMLElement;
    if (!isChange) {
      cards.classList.toggle('show');
    }
    const lang: keyof ButtonLangs = (this.currentLang || Lang.en) as keyof ButtonLangs;

    if (cards.classList.contains('show')) {
      this.element.textContent = this.lang[lang].hide;
    } else {
      this.element.textContent = this.lang[lang].show;
    }
  }
}
