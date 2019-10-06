import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-item',
  template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <a href="http://localhost:4200/moderator/ticket/get/{{companyId}}/{{queueId}}/{{ticketId}}" class="divLink"></a>
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
    name: String = '';
  
    @Input()
    ticketId: String = '';

    @Input()
    queueId: String = '';

    constructor() { }

    ngOnInit() {
    }

}
