import { Component, OnInit, Input } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-end-user-list',
  template: `
  <div *ngIf="tickets?.length > 0; else displayEmpty" class="container-fluid">
    <app-ticket-item *ngFor="let t of tickets" name="{{t.name}}" ticketId="{{t.ticketId}}" queueId="{{queueId}}"></app-ticket-item>
  </div>
  <ng-template #displayEmpty>
    <div class="container-fluid text-center">No tickets registered yet.</div>
  </ng-template>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }
  `]
})
export class EndUserListComponent implements OnInit {
    tickets: any;

    @Input()
    queueId: string;

    constructor(private qs: QueueService) {
        this.tickets = [];
        this.getTickets();
    }

    ngOnInit() {
    }

    getTickets() {
        this.qs.getTickets(this.queueId).subscribe(
            res => {
                this.tickets = res['response'];
            },
            err => {
                console.log(err);
            }
        );
    }
}
