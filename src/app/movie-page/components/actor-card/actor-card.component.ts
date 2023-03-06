import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { MovieCast } from 'src/app/movie-page/models/movie-cast.model';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';
import { getImageUrl } from 'src/app/functions/check-image';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorCardComponent implements OnInit {
  public actorImagePath: string = '';

  @Input() actor: MovieCast | null = null;

  public ngOnInit(): void {
    this.actorImagePath = this.setActorImage();
  }

  private setActorImage(): string {
    return getImageUrl(this.actor?.profile_path, ImageUrls.emptyActor);
  }
}
