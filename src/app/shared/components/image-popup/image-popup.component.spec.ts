import { PopupService } from 'src/app/shared/services/popup.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePopupComponent } from './image-popup.component';

describe('ImagePopupComponent', () => {
  let component: ImagePopupComponent;
  let fixture: ComponentFixture<ImagePopupComponent>;
  let popupService: PopupService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagePopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    popupService = TestBed.inject(PopupService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test close', () => {
    component.closePopup();

    popupService.isOpen.subscribe((val) => {
      expect(val).toBeFalse();
    });
  });
});
