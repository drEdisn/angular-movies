import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent {}
