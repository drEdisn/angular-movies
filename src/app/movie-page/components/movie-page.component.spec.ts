import { HttpClientModule } from '@angular/common/http';
import { ActorCardComponent } from './actor-card/actor-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviePageComponent } from './movie-page.component';
import { ApiService } from 'src/app/shared/services/api.service';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { getImageUrl } from 'src/app/functions/check-image';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePageComponent, ActorCardComponent],
      imports: [
        SharedModule,
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
      providers: [ApiService, TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check getImageUrl', () => {
    expect(component.getImageUrl('')).toEqual(
      getImageUrl('', ImageUrls.emptyImage),
    );

    expect(component.getImageUrl('', true)).toEqual(
      getImageUrl('', ImageUrls.emptyMovieImage),
    );
  });
});
