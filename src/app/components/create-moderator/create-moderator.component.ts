import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-moderator',
  template: `
  <form method="post">
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control form-control-lg" id="name" name="name" placeholder="Full name" />
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" class="form-control" id="email" name="email" placeholder="mail@email.com" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Create Moderator" />
  </form>
  `
})
export class CreateModeratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
