import { Observable } from 'rxjs';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PaginationService } from 'src/app/main/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  public currentPage$: Observable<number> =
    this.paginationService.getCurrentPage();

  constructor(public paginationService: PaginationService) {}
}
