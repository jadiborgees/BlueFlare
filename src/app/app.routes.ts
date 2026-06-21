import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quem-somos', component: QuemSomos },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' }
];