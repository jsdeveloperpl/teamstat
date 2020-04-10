import { Component, ViewChild , ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('navbar') private navbar: ElementRef;

  toggle() {
    if (this.navbar.nativeElement.style.display === 'block') { this.navbar.nativeElement.style.display = 'none'; }
    else { this.navbar.nativeElement.style.display = 'block'; }

  }
}
