import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create-moderator',
  template: `
  <form [formGroup]="modForm" (ngSubmit)="submit()">
    <button type="button" (click)="close()" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" placeholder="Full name" />
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" class="form-control" formControlName="email" placeholder="mail@email.com" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="modForm.pristine || modForm.invalid" value="Create Moderator" />
  </form>
  `
})
export class CreateModeratorComponent implements OnInit {
    modForm: FormGroup;
    constructor(private location: Location, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
    }

    close() {
        this.location.back();
    }

    createForm() {
        this.modForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    submit() {

    }
}
