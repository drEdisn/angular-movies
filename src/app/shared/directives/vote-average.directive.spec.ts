import { ElementRef } from '@angular/core';
import { Vote } from 'src/app/main/enums/vote.enum';
import { VoteAverageDirective } from './vote-average.directive';

describe('VoteAverageDirective', () => {
  let directive: VoteAverageDirective;
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    directive = new VoteAverageDirective(new ElementRef(element));
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('checkColor', () => {
    directive.voteAverage = 2;

    directive.ngOnInit();
    expect(element.style.backgroundColor).toEqual(Vote.red);

    directive.voteAverage = 6;

    directive.ngOnInit();
    expect(element.style.backgroundColor).toEqual(Vote.yellow);

    directive.voteAverage = 9;

    directive.ngOnInit();
    expect(element.style.backgroundColor).toEqual(Vote.green);
  });
});
