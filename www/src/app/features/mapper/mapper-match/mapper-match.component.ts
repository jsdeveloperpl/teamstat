import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapperService, MapperState, EventButtonDetail, TeamMatchEvent, MatchEventType } from '../mapper.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseState } from 'src/app/core/base/route/route-state.service';

@Component({
  selector: 'app-mapper-match',
  templateUrl: './mapper-match.component.html',
  styleUrls: ['./mapper-match.component.scss']
})
export class MapperMatchComponent implements OnInit, OnDestroy {
  public isMatchStarted$: BehaviorSubject<boolean>;
  public matchTime$: BehaviorSubject<number>;
  public state: MapperState;
  public eventsMap: ReadonlyArray<EventButtonDetail>;
  public homeTeamSS = 0;
  public homeTeamW3 = 0;
  public awayTeamSS = 0;
  public awayTeamW3 = 0;

  constructor(private mapperService: MapperService) { }

  ngOnInit(): void {
    console.log(this);
    this.eventsMap = this.mapperService.getEventsMap();
    this.state = this.mapperService.state;
    this.state.match.events$.pipe(tap((e) => {
      console.log(e);
      this.awayTeamW3 = e.filter(({team, type}) => team === 'awayTeam' && type === MatchEventType.W3).length;
      this.awayTeamSS = e.filter(({team, type}) => team === 'awayTeam' && type === MatchEventType.CreatedChance).length;
      this.homeTeamW3 = e.filter(({team, type}) => team === 'homeTeam' && type === MatchEventType.W3).length;
      this.homeTeamSS = e.filter(({team, type}) => team === 'homeTeam' && type === MatchEventType.CreatedChance).length;
    })).subscribe();
  }

  ngOnDestroy(): void {
    if (this.state.match.isFinished$) {
      return;
    }

    this.mapperService.finishMatch();
  }

  addEvent(type: MatchEventType, team: 'homeTeam' | 'awayTeam') {
    const eventsSoFar = this.state.match.events$.getValue();
    const time = this.state.match.time$.getValue();

    const event: TeamMatchEvent = {
      team,
      type,
      time,
      third: time >= 900 ?  Math.floor(time / 900) : 1
    };

    this.state.match.events$.next([
      event,
      ...eventsSoFar,
    ]);
  }

  removeLastEvent() {
    const events: Array<TeamMatchEvent> = this.state.match.events$.getValue();
    events.shift();
    this.state.match.events$.next(events);
  }



  finishMatch() {
    this.mapperService.finishMatch();
  }

  toggleMatchCounter(isPaused: boolean): void {
    if (isPaused) {
      this.mapperService.countMatchTime();
    } else {
      this.mapperService.pauseMatch();
    }
  }
}
