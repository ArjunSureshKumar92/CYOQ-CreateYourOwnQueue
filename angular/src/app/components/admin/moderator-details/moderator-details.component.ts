import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moderator-details',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
    <div class="form-group">
        <label for="name">Moderator name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" formControlName="email" id="email" name="email" [readonly]="moderator?.email" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save Changes" />
    <input type="button" (click)="delete()" class="btn btn-danger btn-block btn-lg" name="delete" id="delete" value="Delete Moderator" />
  </form>
  `
})
export class ModeratorDetailsComponent implements OnInit {
    angForm: FormGroup;
    moderator: any;
    adminId = '';
    companyId = '';
    moderatorId = '';

    constructor(private location: Location, private fb: FormBuilder,
                private qs: QueueService, private route: ActivatedRoute) {
        this.adminId = this.qs.adminId;
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.moderatorId = params.get('moderatorId');
            this.companyId = params.get('companyId');
        });
        this.createForm();
        this.getModerator();
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
        this.qs.getModerator(this.moderatorId).subscribe(
            res => {
                this.moderator = res['response'];
                this.setValues();
            },
            err => { console.log(err); }
        );
    }

    setValues() {
        this.angForm.get('name').setValue(this.moderator.name);
        this.angForm.get('email').setValue(this.moderator.email);
    }

    submit() {
        let data = {
            name: this.angForm.get('name').value,
            email: this.angForm.get('email').value,
            companyId: this.companyId,
            moderatorId: this.moderatorId
        };
        this.qs.updateModerator(data).subscribe(
            res => {
                this.location.back();
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('Updated moderator.');
            }
        );
    }

    delete() {
        let data = {
            name: this.angForm.get('name').value,
            email: this.angForm.get('email').value,
            companyId: this.companyId,
            moderatorId: this.moderatorId
        };
        this.qs.deleteModerator(data).subscribe(
            res => {
                this.location.back();
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('Deleted moderator');
            }
        )
    }
}
