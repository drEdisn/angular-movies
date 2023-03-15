import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActrosGuardService } from './actor-page/services/actors-guard.service';

const ROUTES: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'actor/:id',
    loadChildren: () =>
      import('./actor-page/actor-page.module').then((m) => m.ActorPageModule),
    canActivate: [ActrosGuardService],
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import(
        'src/app/shared/components/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRouterModule {}
