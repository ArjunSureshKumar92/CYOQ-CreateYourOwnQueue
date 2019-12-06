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
      <th scope="col">Delete Ticket</th>
      <th scope="col">Get Ticket Position</th>
    </tr>
  </thead>
  <tbody>
   <tr *ngFor="let ticket of tickets">
      <td scope="row">{{ticket.ticketId}}</td>
      <td>{{ticket.name}}</td>
      <td>{{ticket.queueName}}</td>
      <td>{{ticket.status}}</td>
      <td><button class="btn btn-danger" (click)="cancelTicket(ticket.ticketId)">Cancel Ticket</button></td>
      <td><button class="btn btn-success" (click)="getPositionClick(ticket.ticketId,ticket.queueId)">Get Ticket Position</button></td>
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

  }

  getTickets() {
    this.qs.getUserTickets(this.getCallback, this, this.userId)
  }

  getCallback(val, instance) {
    console.log(val);
    instance.tickets = val;
  }

  updateTicketsCallback(instance, responseType: string) {
    switch (responseType) {
      case "200":
        instance.getTickets();
        break;
      case "201":
        instance.getPositionCallBack('You are the active ticket holder. Cannot delete your ticket now...', instance);
        break;
      case "202":
        instance.getPositionCallBack('You are the next in queue.Cannot delete your ticket now...', instance);
        break;
      case "203":
        instance.getPositionCallBack('You ticket is already closed. Cannot delete your ticket now...', instance)
        break;
    }
  }
  cancelTicket(ticketId: string, queueId: string) {
    console.log('cancel ticket called for ${this.ticketId}');
    console.log(ticketId)
    const data = {
      'companyId': this.qs.companyId,
      'ticketId': ticketId
    }
    this.qs.deleteTicket(ticketId, this.userId, this.updateTicketsCallback, this)
  }

  getPositionClick(ticketId: string, queueId: string): void {
    this.qs.getTicketPriority(this.userId, queueId, ticketId, this.getPositionCallBack, this);
  }

  getPositionCallBack(status: string, instance) {
    console.log("GetPsotion Callback called");

    const dialogRef = instance.dialog.open(ModalComponent, {
      width: '250px',
      data: { title: 'Ticket Position Details', message: status }
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
