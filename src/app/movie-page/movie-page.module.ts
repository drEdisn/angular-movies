import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MoviePageComponent } from './components/movie-page.component';
import { MoviePageRouterModule } from './movie-page-router.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MoviePageComponent, ActorCardComponent],
  imports: [MoviePageRouterModule, SharedModule, MatButtonModule],
})
export class MoviePageModule {}
