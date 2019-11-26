import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enduser-home',
  template: `
  <div>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Ticket ID</th>
      <th scope="col">Name</th>
      <th scope="col">Queue Name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let ticket of tickets">
      <td scope="row">{{ticket.ticketId}}</td>
      <td>{{ticket.name}}</td>
      <td>{{ticket.queueName}}</td>
      <td>{{ticket.status}}</td>
      <td><button class="btn btn-danger" (click)="cancelTicket(ticket.ticketId)">Cancel Ticket</button></td>
      </tr>
  </tbody>
  </table>
  </div>
  `
})
export class EndUserHomeComponent implements OnInit {
  place: String = '(Loading)'
  queueId: String = '';
  userId: String = '';
  ticketId: String = '';
  tickets: any;

  constructor(private qs: QueueService, private router: Router) {
    let url = this.router.url.split('/');
    console.log(url);
    this.userId = url[url.length - 1];
    this.getTickets();
    // this.ticketId = url[url.length - 2];
    //this.queueId = url[url.length - 3];

    // this.qs.getTicketPriority(this.queueId, this.ticketId).subscribe(
    //   res => {
    //     console.log(res);
    //     //this.place = res;
    //   },
    //   err => { },
    //   () => { }
    // );
  }

  getTickets() {
    this.qs.getTickets(this.getCallback, this, this.userId)
  }

  getCallback(val, instance) {
    console.log(val);
    instance.tickets = val;
  }

  updateTicketsCallback() {
    this.getTickets();
  }
  cancelTicket(ticketId: string, queueId: string) {
    console.log('cancel ticket called for ${this.ticketId}');
    console.log(ticketId)
    var data = {
      "companyId": this.qs.companyId,
      "ticketId": ticketId
    }
    this.qs.deleteTicket(data, this.userId, this.updateTicketsCallback)
  }
  ngOnInit() {
  }
}

interface DataForTicket {
  companyId: string;
  ticketId: number;
  created: Date;
}
