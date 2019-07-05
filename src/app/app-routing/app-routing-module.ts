import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameControlComponent} from '../containers/game-control/game-control.component';
import {ShootingScreenComponent} from '../containers/shooting-screen/shooting-screen.component';

const routes: Routes = [
  { path: 'start-game', component: GameControlComponent },
  { path: 'shooting', component: ShootingScreenComponent },
  { path: '**', component: GameControlComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
