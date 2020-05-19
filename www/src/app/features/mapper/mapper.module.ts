import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventFeedComponent } from './mapper-match/event-feed/event-feed.component';
import { EventMapComponent } from './mapper-match/event-map/event-map.component';
import { MapperMatchComponent } from './mapper-match/mapper-match.component';
import { TimerBarComponent } from './mapper-match/timer-bar/timer-bar.component';
import { MapperSetupComponent } from './mapper-setup/mapper-setup.component';
import { MapperSummaryComponent } from './mapper-summary/mapper-summary.component';

@NgModule({
  declarations: [
    MapperSetupComponent,
    MapperMatchComponent,
    MapperSummaryComponent,
    TimerBarComponent,
    EventMapComponent,
    EventFeedComponent
  ],
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
