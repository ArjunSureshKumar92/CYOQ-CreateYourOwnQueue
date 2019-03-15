import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderator-list',
  template: `
  <button routerLink="/moderator/create" class="btn btn-primary">+ Add Moderator</button>
  `
})
export class ModeratorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
