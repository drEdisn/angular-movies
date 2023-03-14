import { ElementRef } from '@angular/core';
import { ShowDirective } from './show.directive';

describe('ShowDirective', () => {
  it('should create an instance', () => {
    const element = document.createElement('div');
    const directive = new ShowDirective(new ElementRef<HTMLElement>(element));
    expect(directive).toBeTruthy();
  });
});
