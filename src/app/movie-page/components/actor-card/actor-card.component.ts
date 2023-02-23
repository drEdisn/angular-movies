import { Cast } from './../../../actor-page/models/cast.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
})
export class ActorCardComponent {
  @Input() actor: Cast | null = null;
}
