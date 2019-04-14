import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';
import { Moderator } from 'src/app/models/moderator.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moderator-details',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="form.submit()" action="http://localhost:3000/admin/{{adminId}}/moderator/update" method="PUT" #form>
    <div class="form-group">
        <label for="name">Moderator name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" value="{{moderator.name}}" />
    </div>
    <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" formControlName="email" id="email" name="email" value="{{moderator.email}}" />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}"  />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="moderatorId" name="moderatorId" value="{{moderatorId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save Changes" />
    <input type="submit" class="btn btn-danger btn-block btn-lg" name="DeleteModerator"
      value="Delete Moderator" (click)="delete()" />
  </form>
  `
})
export class ModeratorDetailsComponent implements OnInit {
    angForm: FormGroup;
    moderator: any;
    adminId: String = '';
    companyId: String = '';
    moderatorId: String = '';

    constructor(private location: Location, private fb: FormBuilder,
    private qs: QueueService, private router: Router) {
        let url = this.router.url.split('/');
        this.moderatorId = url[url.length - 1];
        this.companyId = url[url.length - 2];
        this.adminId = this.qs.adminId;
    }

    ngOnInit() {
    }

    close() {
        this.location.back();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    getModerator() {
        this.qs.getModerator(function(val, instance) {
                instance.moderator = val; 
            }, this, this.moderatorId);
    }

    delete() {
        let data: Moderator = new Moderator(
            this.angForm.get('name').value,
            this.moderatorId,
            this.companyId,
            this.angForm.get('email').value
        );
    }
}
