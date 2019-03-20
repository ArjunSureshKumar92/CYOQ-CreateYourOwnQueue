import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-create-queue',
  template: `
  <form [formGroup]="angForm" (ngSubmit)="submit()">
    <button type="button" (click)="close()" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Queue name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" #name />
    </div>
    <div class="form-group">
        <label for="name">Description</label>
        <input type="text" class="form-control" formControlName="description" #description />
    </div>
    <div class="form-group row justify-content-center">
        <div class="col-xs">
            <label for="startTime">Start time</label>
            <timepicker formControlName="startTime"></timepicker>
        </div>
        <div class="col-xs offset-md-3">
            <label for="closeTime">Closing time</label>
            <timepicker formControlName="closeTime"></timepicker>
        </div>
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Create Queue" />
  </form>
  `
})
export class CreateQueueComponent implements OnInit {
    startTime: Date = new Date();
    closeTime: Date = new Date();
    angForm: FormGroup;

    constructor(private location: Location, private fb: FormBuilder, private qs: QueueService) {
        this.startTime.setHours(9, 0, 0, 0);
        this.closeTime.setHours(17, 0, 0, 0);
        this.createForm();
    }

    ngOnInit() { }

    close() {
        this.location.back();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required ],
            description: ['', Validators.required ],
            startTime: ['', Validators.required],
            closeTime: ['', Validators.required]
        });
        this.angForm.patchValue({
            startTime: this.startTime,
            closeTime: this.closeTime
        })
    }

    submit() {
        this.qs.createQueue(this.angForm.controls['name'].value, this.angForm.controls['description'].value,
            this.angForm.controls['startTime'].value, this.angForm.controls['closeTime'].value);
    }
}
