import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MainComponent } from './main.component';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [MainComponent],
  imports: [ CommonModule, RouterModule.forChild([
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: 'dashboard',
          loadChildren: () => import('../features/dashboard/dashboard.module').then(({DashboardModule}) => DashboardModule)
        },
        {
          path: 'mapper',
          loadChildren: () => import('../features/mapper/mapper.module').then(({MapperModule}) => MapperModule)
        }
      ]
    },

  ]) ]
})
export class MainModule {}
