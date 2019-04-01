import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moderator-item',
  template: `
  <div class="container-fluid clickable row">
    <h5 class="d-inline col">{{name}}</h5>
    <a href="/api/moderator/get/824187727/{{moderatorId}}" class="divLink"></a>
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

  @Input()
  moderatorId: String = '';

  constructor() { }

  ngOnInit() {
  }

}
