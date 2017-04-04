import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StayIslandComponent } from './stay-island/stay-island.component';
import { EndGameComponent } from './end-game/end-game.component';
import { HelpMoanaComponent } from './help-moana/help-moana.component';
import { HideComponent } from './hide/hide.component';
import { DistractComponent } from './distract/distract.component';

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
  },
  {
    path: 'help-moana',
    component: HelpMoanaComponent
  },
  {
    path: 'hide',
    component: HideComponent
  },
  {
    path: "distract",
    component: DistractComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
