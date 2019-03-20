import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-item',
  template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <small class="text-muted text-right text-uppercase col">{{status}}</small>
    <a href="/queue/details/{{name}}" class="divLink"></a>
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
export class QueueItemComponent implements OnInit {
  @Input()
  name: String = '';

  @Input()
  status: String = 'Closed';

  constructor() { }

  ngOnInit() {
  }

}
