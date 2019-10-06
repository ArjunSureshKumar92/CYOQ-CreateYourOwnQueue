import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <app-header></app-header>
  </div>
  <main class="container-fluid scrollbar">
    <router-outlet></router-outlet>
  </main>
  `, styles: [`
    main {
        padding: 1rem;
        height: 80%;
        width: 65%;
        overflow-y: scroll;
    }
  `]
})
export class AppComponent {
  title = 'cyoq';
}
