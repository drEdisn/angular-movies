import { PopupService } from 'src/app/shared/services/popup.service';
import { Person } from 'src/app/actor-page/models/person.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPageComponent } from './actor-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { getImageUrl } from 'src/app/functions/check-image';
import { ImageUrls } from 'src/app/main/enums/image-urls.enum';
import { of } from 'rxjs';
import { genresMock } from 'src/assets/mock/resultMovies.mock';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

describe('ActorPageComponent', () => {
  let component: ActorPageComponent;
  let fixture: ComponentFixture<ActorPageComponent>;
  let service: ApiService;
  let popup: PopupService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorPageComponent],
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
      providers: [TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ApiService);
    popup = TestBed.inject(PopupService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const oninit = spyOn(component, 'ngOnInit');

    component.ngOnInit();

    expect(oninit).toHaveBeenCalled();

    const person: Person = {
      birthday: 'Monday, March 6, 2023',
      name: 'asd',
      biography: 'asasd',
      placeOfBirth: 'asd',
      profilePath: 'asd',
    };

    const genres = spyOn(service, 'getGanres').and.callFake(() => {
      return of(genresMock);
    });

    const spyPerson = spyOn(service, 'getPersonInfo').and.callFake(() => {
      return of(person);
    });

    const comp = TestBed.createComponent(ActorPageComponent).componentInstance;

    comp.ngOnInit();

    expect(spyPerson).toHaveBeenCalled();
    expect(genres).toHaveBeenCalled();

    expect(comp.person).toEqual(person);
  });

  it('test path', () => {
    component.profilePath = getImageUrl('a', ImageUrls.emptyActor);

    expect(component.profilePath).toEqual(
      'https://image.tmdb.org/t/p/originala',
    );

    component.profilePath = getImageUrl(null, ImageUrls.emptyActor);

    expect(component.profilePath).toEqual('./assets/images/person-icon.png');
  });

  it('test open image', () => {
    const open = spyOn(popup, 'open');
    component.openImage('/sadfasdfasdfs.jpg');
    expect(open).toHaveBeenCalled();
  });

  it('change image value', () => {
    component.openImage('/sadfasdfasdfs.jpg');

    popup.isOpen.subscribe((val) => {
      expect(val).toEqual(true);
    });
    popup.imageSrc.subscribe((val) => {
      expect(val).toEqual(
        'https://image.tmdb.org/t/p/original/sadfasdfasdfs.jpg',
      );
    });
  });
});
