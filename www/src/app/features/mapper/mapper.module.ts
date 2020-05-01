import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapperMatchComponent } from './mapper-match/mapper-match.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MapperSummaryComponent } from './mapper-summary/mapper-summary.component';
import { MapperSetupComponent } from './mapper-setup/mapper-setup.component';

@NgModule({
  declarations: [MapperSetupComponent, MapperMatchComponent, MapperSummaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'setup',
        // children: [
        //   {
        //     path: 'setup',
        //     component: MapperSetupComponent
        //   },
        //   {
        //     path: 'match',
        //     component: MapperMatchComponent
        //   },
        //   {
        //     path: 'summary',
        //     component: MapperSummaryComponent
        //   }
        // ],
      },
      {
        path: 'setup',
        component: MapperSetupComponent
      },
      {
        path: 'match',
        component: MapperMatchComponent
      },
      {
        path: 'summary',
        component: MapperSummaryComponent
      }
    ])
  ]
})
export class MapperModule { }
