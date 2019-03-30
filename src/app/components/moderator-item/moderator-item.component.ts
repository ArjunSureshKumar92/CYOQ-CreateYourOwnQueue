import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moderator-item',
  template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
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
export class ModeratorItemComponent implements OnInit {
  @Input()
  name: String = '';

  constructor() { }

  ngOnInit() {
  }

}
