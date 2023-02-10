import { MoviesService } from './services/movies.service';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MovieItemComponent } from './components/movies-view/movie-item/movie-item.component';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MoviesRouterModule } from './movies-router.module';

@NgModule({
  providers: [
    MoviesService,
  ],
  declarations: [
    MoviesViewComponent,
    PaginationComponent,
    MovieItemComponent,
  ],
  imports: [
    SharedModule,
    MoviesRouterModule,
  ],
  exports: [
    MoviesViewComponent,
  ]
})
export class MoviesModule {}
