import { SharedModule } from './../../shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPageComponent } from './actor-page.component';

describe('ActorPageComponent', () => {
  let component: ActorPageComponent;
  let fixture: ComponentFixture<ActorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActorPageComponent],
      imports: [SharedModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
