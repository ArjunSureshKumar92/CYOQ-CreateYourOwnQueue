import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  template: `
  <h1 class="text-center">Queues</h1>
  <div class="text-right">
    <button routerLink="/queue/create" class="btn btn-primary">+ Add Queue</button>
  </div>
  <app-queue-list></app-queue-list>
  `
})
export class AdminHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
