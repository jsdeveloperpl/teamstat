import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventButtonDetail, MatchEventType } from '../../_services/mapper.service';

@Component({
  selector: 'app-event-map',
  templateUrl: './event-map.component.html',
  styleUrls: ['./event-map.component.scss']
})
export class EventMapComponent {
  @Output() public eventAdd: EventEmitter<{ type: MatchEventType, team: 'homeTeam' | 'awayTeam' }> = new EventEmitter();
  @Input() public eventsMap: ReadonlyArray<EventButtonDetail>;

  addEvent(type: MatchEventType, team: 'homeTeam' | 'awayTeam') {
    this.eventAdd.emit({ type, team });
  }

  // addEvent(type: MatchEventType, team: 'homeTeam' | 'awayTeam') {
  //   const eventsSoFar = this.state.match.events$.getValue();
  //   const time = this.state.match.time$.getValue();

  //   const event: TeamMatchEvent = {
  //     team,
  //     type,
  //     time,
  //     third: time >= 900 ? Math.floor(time / 900) : 1
  //   };

  //   this.state.match.events$.next([
  //     event,
  //     ...eventsSoFar,
  //   ]);
  // }
}
