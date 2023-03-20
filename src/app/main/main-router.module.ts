import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageGuardService } from '../movie-page/services/movie-page-guard.service';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MoviesViewComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('src/app/movie-page/movie-page.module').then(
        (m) => m.MoviePageModule,
      ),
    canActivate: [MoviePageGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MainRouterModule {}
