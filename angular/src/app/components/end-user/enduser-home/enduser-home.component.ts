import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enduser-home',
  template: `
  <div class="text-center">

    <p class="text-uppercase">Your place in the queue:</p>
    <h1 class="display-1">#{{place}}</h1>
    <button class="btn btn-danger btn-lg">Cancel your place</button>
  </div>
  <div>
  <ul>
  <li *ngFor="let ticket of tickets">
    <div>{{ticket.ticketId}}</div>
  </li>
</ul>
  </div>
  <div>
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Ticket ID</th>
      <th scope="col">Name</th>
      <th scope="col">Queue Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let ticket of tickets">
      <td scope="row">{{ticket.ticketId}}</td>
      <td>{{ticket.name}}</td>
      <td>{{ticket.queueName}}</td>
      <td>{{ticket.status}}</td>
      <td><button (click)="cancelTicket({{ticket.ticketId}})">Cancel Ticket</button></td>
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

  cancelTicket(ticketId: string) {
    console.log('cancel ticket called for ${this.ticketId}');
    console.log(ticketId);
  }
  ngOnInit() {
  }

}
