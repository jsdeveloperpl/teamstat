import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  @ViewChild('navbar') private navbar: ElementRef;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.navigate(['dashboard'], {relativeTo: this.route});
  }

  toggle(): void {
    if (this.navbar.nativeElement.style.display === 'block') { this.navbar.nativeElement.style.display = 'none'; }
    else { this.navbar.nativeElement.style.display = 'block'; }

  }
}
