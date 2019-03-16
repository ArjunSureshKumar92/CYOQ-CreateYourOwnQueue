import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-item',
  template: `
  <div class="container-fluid">
    {{name}}
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

  constructor() { }

  ngOnInit() {
  }

}
