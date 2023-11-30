import { Component, OnInit, signal } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  counter = signal(0);
  user!: any;
  async ngOnInit() {
    const userService = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      exposedModule: './user-service',
    });
    this.user = userService.user;
  }
  onCustomEvent(event: any) {
    console.log(event.detail);
    this.counter.update((count) => count + 1);
  }

  login() {
    this.user.setUser('Sayantan');
  }

  logout() {
    this.user.setUser('default');
  }
}
