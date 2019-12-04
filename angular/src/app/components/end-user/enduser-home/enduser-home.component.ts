import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

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
      <td><button class="btn btn-danger" (click)="getPositionClick(ticket.queueId)">Get Ticket Position</button></td>
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

  constructor(private qs: QueueService, private router: Router, private dialog: MatDialog) {
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
    const data = {
      'companyId': this.qs.companyId,
      'ticketId': ticketId
    }
    this.qs.deleteTicket(ticketId, this.userId, this.updateTicketsCallback)
  }

  getPositionClick(ticketId: string, queueId: string): void {
    this.qs.getTicketPriority(this.userId, queueId, ticketId, this.getPositionCallBack);
  }

  getPositionCallBack(status: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { title: 'Title Test', message: status }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog box Closed");
    });
  }
  ngOnInit() {
  }
}

interface DataForTicket {
  companyId: string;
  ticketId: number;
  created: Date;
}
