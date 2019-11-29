import { Component } from '@angular/core';

@Component({
  selector: 'app-moderator-navbar',
  template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top justify-content-center nav-fill">
        <div id="navbar">
          <ul class="list-inline nav">
            <li class="list-inline-item nav-item">
              <a routerLink="/moderator/queue/list" class="nav-link" routerLinkActive="active">Queues</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class ModeratorNavbarComponent {

}