import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top justify-content-center nav-fill">
        <div id="navbar">
          <ul class="list-inline nav">
            <li class="list-inline-item nav-item">
              <a routerLink="" class="nav-link" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Queues</a>
            </li>
            <li class="list-inline-item nav-item">
              <a routerLink="" class="nav-link" routerLinkActive="active">Moderators</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class NavbarComponent {

}