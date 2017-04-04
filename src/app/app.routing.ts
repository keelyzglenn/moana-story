import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StayIslandComponent } from './stay-island/stay-island.component';
import { EndGameComponent } from './end-game/end-game.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'stay-island',
    component: StayIslandComponent
  },
  {
    path: 'end-game',
    component: EndGameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
