import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top justify-content-center nav-fill">
        <div id="navbar">
          <ul class="list-inline nav">
            <li class="list-inline-item nav-item">
              <a routerLink="/admin/queue/list" class="nav-link" routerLinkActive="active">Queues</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="/admin/moderator/list" class="nav-link">Moderators</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="/admin/company" class="nav-link">Company</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class NavbarComponent {

}