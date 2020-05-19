import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapperService } from '../_services/mapper.service';

@Component({
  selector: 'app-mapper-summary',
  template: `
    summary <br>
    <button (click)="save()" class="btn btn-info">save match</button>
  <pre> {{state.match.events$ | async | json}}</pre>`
})

export class MapperSummaryComponent implements OnInit {
  state;
  constructor(private readonly mapperService: MapperService, private readonly router: Router) { }

  ngOnInit() {
    console.log(this.mapperService.state);
    this.state = this.mapperService.state;
  }

  public save() {
    alert('saved!');
    console.log(this.state);
  }
}
