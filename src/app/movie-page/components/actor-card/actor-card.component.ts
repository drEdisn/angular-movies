import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/actor-page/models/cast.model';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent implements OnInit {
  public actorImagePath: string = '';

  @Input() actor: Cast | null = null;

  public ngOnInit(): void {
    this.actorImagePath = this.setActorImage();
  }

  private setActorImage(): string {
    if (this.actor?.profile_path) {
      return ImageUrls.imageUrl + this.actor?.profile_path;
    }

    return ImageUrls.define + ImageUrls.emptyActor;
  }
}
