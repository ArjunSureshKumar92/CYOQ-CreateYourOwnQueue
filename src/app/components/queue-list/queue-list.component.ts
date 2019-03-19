import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-list',
  template: `
  <div class="container-fluid">
    <app-queue-item *ngFor="let q of queues" name="{{q}}"></app-queue-item>
  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }
  `]
})
export class QueueListComponent implements OnInit {
  queues = [
      'Registration',
      'Food service',
      'Appointments'
  ]

  constructor() { }

  ngOnInit() {
  }

}
