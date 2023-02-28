import { ActorPageRoutingModule } from './actor-page-routing.module';
import { ActorPageComponent } from './components/actor-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ActorPageComponent],
  imports: [SharedModule, ActorPageRoutingModule],
})
export class ActorPageModule {}
