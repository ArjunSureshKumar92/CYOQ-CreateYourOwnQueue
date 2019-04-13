import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top">
        <div class="navbar-header">
          <a routerLink=""><h1 class="navbar-brand">{{company}}</h1></a>
        </div>
      </nav>
    </div>
  `
})
export class HeaderComponent implements OnInit {
  company = 'Centennial College'

  constructor() { }

  ngOnInit() {
  }

}
