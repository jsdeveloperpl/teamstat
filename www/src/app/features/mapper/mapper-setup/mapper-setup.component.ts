import { Component, OnInit } from '@angular/core';
import { MapperService, MapperState } from '../_services/mapper.service';

@Component({
  selector: 'app-mapper-setup',
  template: `
  <div class="mx-2 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
    <label>
      <input placeholder="Home team" [(ngModel)]="state.homeTeam.name">
    </label>
    <label>
      <input placeholder="Away team" [(ngModel)]="state.awayTeam.name">
    </label>
    <button class="btn btn-primary" (click)="startMatch()">Rozpocznij mecz</button>
  </div>
  `
})

export class MapperSetupComponent implements OnInit {
  public state: MapperState;
  constructor(private readonly mapperService: MapperService) { }

  ngOnInit() {
    this.state = this.mapperService.state;
  }

  startMatch() {
    if (this.state.awayTeam.name && this.state.homeTeam.name) {
      this.mapperService.startMatch();
    }
  }
}
