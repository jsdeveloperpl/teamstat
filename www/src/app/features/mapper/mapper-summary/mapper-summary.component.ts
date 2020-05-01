import { Component, OnInit } from '@angular/core';
import { MapperService } from '../mapper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapper-summary',
  template: `
    summary <br>
    <button (click)="save()" class="btn btn-info">save match</button>
  `
})

export class MapperSummaryComponent implements OnInit {
  constructor(private readonly mapperService: MapperService, private readonly router: Router) { }

  ngOnInit() {
    console.log(this.mapperService.state);
   }

  public save() {
    alert('saved!');
    this.router.navigate(['/']);
  }
}
