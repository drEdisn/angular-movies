import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MainRouterModule } from './main-router.module';

@NgModule({
  declarations: [MoviesViewComponent, PaginationComponent],
  imports: [SharedModule, MainRouterModule],
  exports: [MoviesViewComponent],
})
export class MainModule {}
