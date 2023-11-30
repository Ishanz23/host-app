import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  counter = signal(0);
  onCustomEvent(event: any) {
    console.log(event.detail);
    this.counter.update((count) => count + 1);
  }
}
