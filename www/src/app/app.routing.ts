import { Routes } from '@angular/router';
import { AuthGuard } from './core/_guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/main.module').then(({MainModule}) => MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(({AuthModule}) => AuthModule),

  },
];
