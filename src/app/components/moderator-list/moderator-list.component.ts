import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-list',
  template: `
  <h1 class="text-center">Moderators</h1>
  <div class="text-right">
  <a href="http://localhost:4200/api/moderator/create" class="btn btn-primary">+ Add Moderator</a>
  </div>
  `
})
export class ModeratorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
