import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Vote } from 'src/app/main/enums/vote.enum';

@Directive({
  selector: '[appVoteAverage]',
})
export class VoteAverageDirective implements OnInit {
  private element: HTMLElement = this.el.nativeElement;
  @Input() voteAverage: number = 0;

  constructor(private el: ElementRef<HTMLElement>) {}

  public ngOnInit(): void {
    this.setVoteColor();
  }

  private setVoteColor(): void {
    let color: string = '';

    if (this.voteAverage >= Vote.greenVote) {
      color = Vote.green;
    } else if (this.voteAverage <= Vote.redVote) {
      color = Vote.red;
    } else {
      color = Vote.yellow;
    }

    this.element.style.backgroundColor = color;
  }
}
