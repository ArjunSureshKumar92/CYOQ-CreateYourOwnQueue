import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-home',
  template: `
  <h1 class="text-center">Your Queues</h1>
  <app-queue-list></app-queue-list>
  `
})
export class ModeratorHomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
