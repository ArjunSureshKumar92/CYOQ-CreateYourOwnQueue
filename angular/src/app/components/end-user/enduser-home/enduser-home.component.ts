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
  <table mat-table [dataSource]="tickets" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="ticketId">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element"> {{element.ticketId}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="status">
    <th mat-header-cell *matHeaderCellDef> Status </th>
    <td mat-cell *matCellDef="let element"> {{element.status}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="queueName">
    <th mat-header-cell *matHeaderCellDef> Queue Name </th>
    <td mat-cell *matCellDef="let element"> {{element.queueName}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
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
  displayedColumns: string[] = ['ticketId', 'name', 'status', 'queueName'];

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

  ngOnInit() {
  }

}
