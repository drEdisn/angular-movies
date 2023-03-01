import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviePageComponent } from './components/movie-page.component';
import { MoviePageRouterModule } from './movie-page-router.module';
import { MatButtonModule } from '@angular/material/button';
import { ShowDirective } from './directives/show.directive';
import { ImagePopupComponent } from './components/image-popup/image-popup.component';

@NgModule({
  declarations: [MoviePageComponent, ActorCardComponent, ShowDirective, ImagePopupComponent],
  imports: [MoviePageRouterModule, SharedModule, MatButtonModule],
})
export class MoviePageModule {}
