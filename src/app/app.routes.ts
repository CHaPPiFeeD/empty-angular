import { Routes } from '@angular/router';
import { InGameComponent } from './components/in-game/in-game.component';
import { InLobbyComponent } from './components/in-lobby/in-lobby.component';


export const routes: Routes = [
  {
    path: 'in-game',
    component: InGameComponent,
  },
  {
    path: 'in-lobby',
    component: InLobbyComponent,
  },
];
