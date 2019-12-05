import { Component, OnInit, Input } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-ticket-item',
  template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <a routerLink="/moderator/ticket/get/{{this.qs.companyId}}/{{queueId}}/ticket/{{ticketId}}" class="divLink"></a>
  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(255,255,255);
    margin: 0.5em;
    padding: 1em 1.5em;
  }
  `]
})
export class TicketItemComponent implements OnInit {
    @Input()
    name = '';
  
    @Input()
    ticketId = '';

    @Input()
    queueId = '';

    constructor(private qs: QueueService) { }

    ngOnInit() {
    }

}
