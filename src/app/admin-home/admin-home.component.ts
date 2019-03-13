import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  template: `
  <button routerLink="/queue/create" class="btn btn-primary">+ Add Queue</button>
  `,
  styles: [``]
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
