import { LanguageService } from 'src/app/main/services/language.service';
import { PopupService } from 'src/app/shared/services/popup.service';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';
import { PersonCredits } from 'src/app/actor-page/models/person-credits.model';
import {
  PersonImage,
  PersonImagesResult,
} from 'src/app/actor-page/models/person-images-result';
import { Person } from 'src/app/actor-page/models/person.model';
import { Movie } from 'src/app/main/models/movie.model';
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, BehaviorSubject } from 'rxjs';
import { MoviesService } from 'src/app/main/services/movies.service';
import { Genres } from 'src/app/main/models/genres.model';
import { getImageUrl } from 'src/app/functions/check-image';
import { checkForZero } from 'src/app/functions/check-for-zero';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-components',
  templateUrl: './actor-page.component.html',
  styleUrls: ['./actor-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  private actorId: number = 0;
  public person: Person | null = null;
  public profilePath: string = '';
  public images$: BehaviorSubject<PersonImage[]> = new BehaviorSubject<
    PersonImage[]
  >([]);
  public credits$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  public imagePrePath: string = ImageUrls.imageUrl;

  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private moviesService: MoviesService,
    public popupService: PopupService,
    public languageService: LanguageService,
    private translateService: TranslateService,
  ) {}

  public ngOnInit(): void {
    this.init();
    this.getTranslateLangChenge();
  }

  private getTranslateLangChenge(): void {
    this.translateService.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAllRequests();
      });
  }

  private getAllRequests(): void {
    this.setGenres();
    this.getPersonInfo();
    this.setPersonCredits();
  }

  private init(): void {
    this.actorId = this.router.snapshot.params['id'];

    if (checkForZero(this.moviesService.genres.length)) {
      this.setGenres();
    }

    this.getPersonInfo();
    this.setPersonImages();
    this.setPersonCredits();
  }

  private getPersonInfo(): void {
    this.apiService
      .getPersonInfo(this.actorId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((person: Person) => {
        this.person = person;
        this.profilePath = getImageUrl(
          person.profilePath,
          ImageUrls.emptyActor,
        );
        this.cdr.detectChanges();
      });
  }

  public openImage(path: string): void {
    this.popupService.open(ImageUrls.imageUrl + path);
  }

  private setGenres(): void {
    this.apiService.getGanres()
      .pipe(takeUntil(this.destroy$))
      .subscribe((genresResult: Genres) => {
        this.moviesService.genres = genresResult.genres;
      });
  }

  private setPersonImages(): void {
    this.apiService
      .getPersonImages(this.actorId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((images: PersonImagesResult) => {
        this.images$.next(images.profiles);
      });
  }

  private setPersonCredits(): void {
    this.apiService
      .getPersonCredits(this.actorId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((credits: PersonCredits) => {
        this.credits$.next(credits.cast);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
