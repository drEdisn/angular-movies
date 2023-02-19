import { ActorPageComponent } from './components/actor-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: ActorPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ActorPageRoutingModule {}