import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RetroComponent } from './retro/retro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'retro', component: RetroComponent },
  { path: '**', redirectTo: 'index' }
];
