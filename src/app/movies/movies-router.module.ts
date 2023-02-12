import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesViewComponent } from './components/movies-view/movies-view.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MoviesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MoviesRouterModule {}
