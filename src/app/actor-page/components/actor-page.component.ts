import { ImageUrls } from './../../main/enums/image-urls.enum';
import { PersonCredits } from 'src/app/actor-page/models/person-credits.model';
import { PersonImageApi, PersonImagesResultApi } from './../models/person-images-result';
import { Person } from './../models/person.model';
import { Movie } from 'src/app/main/models/movie.model';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, BehaviorSubject } from 'rxjs';

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
  public images$: BehaviorSubject<PersonImageApi[]> = new BehaviorSubject<PersonImageApi[]>([]);
  public credits$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.actorId = this.router.snapshot.params['id'];

    this.apiService.getPersonInfo(this.actorId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((person: Person) => {
        this.person = person;
        this.profilePath = ImageUrls.imageUrl + person.profilePath;
        this.cdr.detectChanges();
      });

    this.setPersonImages();
    this.setPersonCredits();
  }

  private setPersonImages(): void {
    this.apiService.getPersonImages(this.actorId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((images: PersonImagesResultApi) => {
        this.images$.next(images.profiles);
      });
  }

  private setPersonCredits(): void {
    this.apiService.getPersonCredits(this.actorId)
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
