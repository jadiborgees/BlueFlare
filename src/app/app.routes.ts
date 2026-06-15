import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'quem-somos', component: QuemSomos },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' }
];