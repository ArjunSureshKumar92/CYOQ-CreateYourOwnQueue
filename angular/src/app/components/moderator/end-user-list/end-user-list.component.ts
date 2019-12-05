import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-end-user-list',
  template: `
  <div *ngIf="ticket; else displayEmpty" class="container-fluid">
    <app-ticket-item name="{{ticket.name}}" ticketId="{{ticket.ticketId}}" queueId="{{queueId}}"></app-ticket-item>
  </div>
  <ng-template #displayEmpty>
    <div class="container-fluid text-center">No tickets called yet.</div>
  </ng-template>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }
  `
  ]
})
export class EndUserListComponent implements OnInit, OnChanges {
    @Input()
    ticket: any;

    @Input()
    queueId = '';

    constructor(private qs: QueueService) {}

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges) {}
}
