import { Injectable } from '@angular/core';
import { RouteStateService, BaseState } from 'src/app/core/base/route/route-state.service';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';

export class MatchDetails {
  time$: BehaviorSubject<number> = new BehaviorSubject(0);
  events$: BehaviorSubject<Array<TeamMatchEvent>> = new BehaviorSubject([]);
  isFinished$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isPaused$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isStarted$: BehaviorSubject<boolean> = new BehaviorSubject(false);
}

export const enum MatchEventType {
  W3 = 'w3',
  CreatedChance = 'chance',
  Goal = 'goal',
  OnTargetShot = 'ontargetShot',
  OffTargetShot = 'offtargetShot'
}

export class MatchEvent {
  time: number;
  type: MatchEventType;
  third: number;
}

export class TeamMatchEvent extends MatchEvent {
  team: 'homeTeam' | 'awayTeam';
}

export abstract class Team {
  name: string;
  events: Array<MatchEvent>;
}

export class MapperState {
  homeTeam: Team = { name: '', events: []};
  awayTeam: Team = { name: '', events: []};
  match: MatchDetails = new MatchDetails();
}

export interface EventButtonDetail {
  type: MatchEventType;
  label: string;
  buttonStyle: string;
}


@Injectable({providedIn: 'root'})
export class MapperService extends RouteStateService<MapperState> {
  public state: MapperState;

  private counter$: Subscription;

  constructor() {
    super();

    this.state = new MapperState();
  }

  getEventsMap(): ReadonlyArray<EventButtonDetail> {
    return [
      {type: MatchEventType.CreatedChance, label: 'chance', buttonStyle: 'primary'},
      {type: MatchEventType.W3, label: 'w3', buttonStyle: 'secondary'},
      {type: MatchEventType.Goal, label: 'goal', buttonStyle: 'info'},
      {type: MatchEventType.OnTargetShot, label: 'on target', buttonStyle: 'success'},
      {type: MatchEventType.OffTargetShot, label: 'off target', buttonStyle: 'danger'},
    ];
  }

  startMatch(): void {
    this.state.match.isStarted$.next(true);
    this.countMatchTime();
  }

  countMatchTime(): void {
    this.state.match.isPaused$.next(false);
    this.counter$ = interval(1000).subscribe(() => {
      this.state.match.time$.next(this.state.match.time$.getValue() + 1);
    });
  }

  pauseMatch() {
    this.stopCountingMatchTime(this.state.match.isPaused$);
  }

  finishMatch() {
    this.stopCountingMatchTime(this.state.match.isFinished$);
    this.state.match.isStarted$.next(false);
    this.state.match.isPaused$.next(false);
  }

  private stopCountingMatchTime(stream: BehaviorSubject<boolean>): void {
    stream.next(true);
    this.counter$.unsubscribe();
  }
}
