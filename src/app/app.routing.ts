import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'mapper',
    loadChildren: () => import('./features/mapper/mapper.module').then(({MapperModule}) => MapperModule)
  }
];
