import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue.service';
import { Queue } from '../../models/queue.model';

@Component({
  selector: 'app-queue-list',
  template: `
  <div class="container-fluid">
    <app-queue-item *ngFor="let q of queues" name="{{q.name}}" status="{{q.status}}"></app-queue-item>
    

  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }
  `]
})
export class QueueListComponent implements OnInit {
    queues: any;

    constructor(private qs: QueueService) {
        this.queues = [];
        this.getQueues();
    }

    getQueues() {
        this.queues = this.qs.getQueues();
    }

    ngOnInit() {
    }

}
