import { PopupService } from './../../services/popup.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePopupComponent {

  constructor(
    public popupService: PopupService,
  ) {}

  public closePopup(): void {
    this.popupService.close();
  }
}
