import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../../services/queue.service';

@Component({
  selector: 'app-moderator-queue-list',
  template: `
  <div class="input-group">
    <input [(ngModel)]="searchText" class="form-control" />
    <div class="input-group-append">
        <button class="btn btn-primary">Search</button>
    </div>
  </div>
  <div class="container-fluid">
    <app-queue-item *ngFor="let q of queues | filter : searchText" name="{{q.name}}" queueId="{{q.queueId}}"></app-queue-item>
  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }

  .input-group {
    margin: 2em 0 0 0;
  }
  `]
})
export class ModeratorQueueListComponent implements OnInit {
    queues: any;

    constructor(private qs: QueueService) {
        this.queues = [];
        this.getQueues();
    }

    getQueues() {
      this.qs.getQueues(this.getCallback,this)
    }

    getCallback(val,instance) {
      console.log("val"+val[0].name);
      instance.queues = val; 
    }

    ngOnInit() {
    }

}
