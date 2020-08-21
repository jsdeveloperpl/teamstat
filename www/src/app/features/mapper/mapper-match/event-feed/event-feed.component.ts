import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeamMatchEvent } from '../../_services/mapper.service';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.scss']
})
export class EventFeedComponent {
  @Input() public events$: BehaviorSubject<TeamMatchEvent[]>;

  public removeLastEvent(): void {
    this.events$.next(this.events$.getValue().slice(1));
  }
}
