import { Component } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  constructor(public paginationService: PaginationService) {}
}
