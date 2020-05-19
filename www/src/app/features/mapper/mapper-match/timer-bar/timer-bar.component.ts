import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timer-bar',
  templateUrl: './timer-bar.component.html',
})
export class TimerBarComponent {
  @Input() isPaused: boolean;
  @Input() time: number;
  @Output() stopClick: EventEmitter<null> = new EventEmitter();
  @Output() pauseClick: EventEmitter<null> = new EventEmitter();
}
