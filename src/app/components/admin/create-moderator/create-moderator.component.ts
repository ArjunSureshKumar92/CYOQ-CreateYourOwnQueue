import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-create-moderator',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="modForm" (ngSubmit)="form.submit()" action="http://localhost:3000/admin/{{adminId}}/moderator/create" method="POST" #form>
    <button type="button" (click)="close()" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" name="name" id="name" placeholder="Full name" />
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" class="form-control" formControlName="email" name="email" id="email" placeholder="mail@email.com" />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="modForm.pristine || modForm.invalid" value="Create Moderator" />
  </form>
  `
})
export class CreateModeratorComponent implements OnInit {
    modForm: FormGroup;
    companyId: String = '';
    adminId: String = '';

    constructor(private location: Location, private fb: FormBuilder, private qs: QueueService) {
        this.createForm();
        this.companyId = this.qs.companyId;
        this.adminId = this.qs.adminId;
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
}
