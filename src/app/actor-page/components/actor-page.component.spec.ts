import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPageComponent } from './actor-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActorPageComponent', () => {
  let component: ActorPageComponent;
  let fixture: ComponentFixture<ActorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorPageComponent],
      imports: [SharedModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
