import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-admin-home',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <h1 class="text-center">Queues</h1>
  <div class="text-right">
    <a routerLink="/admin/queue/create" class="btn btn-primary">+ Add Queue</a>
  </div>
  <app-queue-list></app-queue-list>
  `
})
export class AdminHomeComponent implements OnInit {

  constructor(private qs: QueueService) { }

  ngOnInit() {
  }

}
