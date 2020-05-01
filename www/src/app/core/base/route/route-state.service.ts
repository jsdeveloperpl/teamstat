// import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

export class BaseState<T> {
  constructor(stateClass: T) {
    this.state = new BehaviorSubject({...stateClass});
  }
  private state: BehaviorSubject<T>;

  public get(): T {
    return this.state.getValue();
  }

  public update(props: Partial<T>): void {
    this.state.next({...this.get(), ...props});
  }

  public get$(): BehaviorSubject<T> {
    return this.state;
  }
}

export class RouteStateService<T> {
  private loading: boolean;
  private done: boolean;
  private failed: boolean;

  setLoading() {
    this.loading = true;
    this.done = false;
    this.failed = false;
  }

  setDone() {
    this.done = true;
    this.loading = false;
    this.failed = false;
  }

  setFailed() {
    this.failed = true;
    this.done = false;
    this.loading = false;
  }

  createState(stateClass: T): BaseState<T>  {
    return new BaseState<T>(stateClass);
  }

  constructor() {

  }

}
