import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Cast } from 'src/app/actor-page/models/cast.model';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent {
  @Input() actor: Cast | null = null;
}
