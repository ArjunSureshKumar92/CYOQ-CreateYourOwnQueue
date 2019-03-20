import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create-moderator',
  template: `
  <form>
    <button type="button" (click)="close()" class="close" aria-label="Close">
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

    constructor(private location: Location) { }

    ngOnInit() {
    }

    close() {
        this.location.back();
    }

}
