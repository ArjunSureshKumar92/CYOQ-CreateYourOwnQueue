import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue-details',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
    <div class="form-group">
        <label for="name">Queue name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Description</label>
        <input type="text" class="form-control" formControlName="description" id="description" name="description" />
    </div>
    <div class="form-group row justify-content-center">
        <div class="col-xs">
            <label for="startTime">Start time</label><br>
            <input type="time" formControlName="startTime" name="time" id="time" />
        </div>
        <div class="col-xs offset-md-3">
            <label for="closeTime">Closing time</label><br>
            <input type="time" formControlName="closeTime" name="time" id="time" />
        </div>
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}"  />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="queueId" name="queueId" value="{{queueId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save Changes" />
    <input type="button" (click)="delete()" class="btn btn-danger btn-block btn-lg" name="delete" id="delete" value="Delete Queue" />
  </form>
  `
})
export class QueueDetailsComponent implements OnInit {
    angForm: FormGroup;
    queue: any;
    adminId: String = '';
    companyId: String = '';
    queueId: String = '';

    constructor(private location: Location, private fb: FormBuilder,
    private qs: QueueService, private router: Router) {
        let url = this.router.url.split('/');
        this.queueId = url[url.length - 1];
        this.companyId = url[url.length - 2];
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getQueue();
    }

    ngOnInit() {
    }

    close() {
        this.location.back();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            description: [''],
            startTime: [0],
            closeTime: [0],
        });
    }

    getQueue() {
        this.qs.getQueue(function(val, instance) {
                instance.queue = val;
                instance.setValues(); 
            }, this, this.queueId);
    }

    setValues() {
        this.angForm.get('name').setValue(this.queue.name);
        this.angForm.get('description').setValue(this.queue.description);
        this.angForm.get('startTime').setValue(this.queue.startTime);
        this.angForm.get('closeTime').setValue(this.queue.closeTime);
    }

    submit() {
        let data = {
            name: this.angForm.get('name').value,
            queueId: this.queueId,
            companyId: this.companyId,
            description: this.angForm.get('description').value,
            startTime: this.angForm.get('startTime').value,
            closeTime: this.angForm.get('closeTime').value
        };
        this.qs.updateQueue(data).subscribe(
            res => {
                this.router.navigate(['']);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('Updated queue.');
            }
        )
    }

    delete() {
        let data = {
            queueId: this.queueId,
            companyId: this.companyId
        };
        this.qs.deleteQueue(data).subscribe(
            res => {
                this.router.navigate(['']);
            },
            err => {
                console.log(err);
            },
            () => {
                console.log('Deleted queue');
            }
        )
    }
}
