import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../../services/queue.service';

@Component({
  selector: 'app-queue-list',
  template: `
  <div class="input-group">
    <input [(ngModel)]="searchText" class="form-control" />
    <div class="input-group-append">
        <button class="btn btn-primary">Search</button>
    </div>
  </div>
  <div *ngIf="queues?.length > 0; else displayEmpty" class="container-fluid">
    <app-queue-item *ngFor="let q of queues | filter : searchText" name="{{q.name}}" queueId="{{q.queueId}}" companyId="{{companyId}}"></app-queue-item>
  </div>
  <ng-template #displayEmpty>
    <div class="container-fluid text-center">No queues created yet.</div>
  </ng-template>
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
export class QueueListComponent implements OnInit {
    queues: any;
    companyId: string;

    constructor(private qs: QueueService) {
        this.queues = [];
        this.getQueues();
        this.companyId = this.qs.companyId;
    }

    getQueues() {
        this.qs.getQueues().subscribe(res => {
            this.queues = res['response'];
        });
    }

    getCallback(val,instance) {
      console.log("val"+val[0].name);
      instance.queues = val; 
    }

    ngOnInit() {
    }

}
