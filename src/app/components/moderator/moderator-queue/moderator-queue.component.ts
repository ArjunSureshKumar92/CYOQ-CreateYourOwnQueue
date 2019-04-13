import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-queue',
  template: `
  <form action="/api/" method="PUT">
    <input type="submit" value="Call Next" class="btn btn-primary btn-lg" name="call" id="call" (click)="form.submit()" />
    <app-end-user-list queueId="{{queueId}}"></app-end-user-list>
    <input type="submit" value="Close Registration" class="btn btn-danger btn-lg" name="close" id="close" (click)="form.submit()" />
  </form>
  `
})
export class ModeratorQueueComponent implements OnInit {
    queueId: String = '';
    constructor() { }

    ngOnInit() {
    }
}
