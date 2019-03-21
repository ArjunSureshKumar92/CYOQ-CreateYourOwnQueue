import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: 'app-create-queue',
    template: `
    <form action="http://localhost:3000/api/queue/create" target="_blank" method="POST" #form>
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Queue name</label>
        <input type="text" class="form-control form-control-lg" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Description</label>
        <input type="text" class="form-control" id="description" name="description" />
    </div>
    <div class="form-group row justify-content-center">
        <div class="col-xs">
            <label for="startTime">Start time</label>
            <timepicker></timepicker>
            <hr>
        </div>
        <div class="col-xs offset-md-3">
            <label for="closingTime">Closing time</label>
            <timepicker></timepicker>
        </div>
    </div>
    <input type="text" class="form-control" id="companyId" name="companyId" value="467908090" hidden />
    <input type="text" class="form-control" id="startTime" name="startTime" value="09:00" hidden />
    <input type="text" class="form-control" id="closeTime" name="closeTime" value="17:00" hidden />
    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Create Queue" (click)="form.submit()"/>
  </form> `


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
            name: ['', Validators.required],
            description: ['', Validators.required],
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
            this.angForm.controls['startTime'].value.toString(), this.angForm.controls['closeTime'].value.toString());
    }


}


