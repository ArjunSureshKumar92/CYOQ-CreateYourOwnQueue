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
    <app-moderator-queue-item *ngFor="let q of queues | filter : searchText" name="{{q.name}}" queueId="{{q.queueId}}"></app-moderator-queue-item>
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
        this.qs.getQueues(this.qs.getModeratorId()).subscribe(
            res => {
              this.queues = res['response'];
            }, 
            err => {
                console.log(err);
            }
        );
    }

    ngOnInit() {
    }

}
