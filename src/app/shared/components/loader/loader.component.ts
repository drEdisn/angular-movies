import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  public isOpen: Observable<boolean> = this.loaderService.getIsOpenValue();

  constructor(private loaderService: LoaderService) {}
}
