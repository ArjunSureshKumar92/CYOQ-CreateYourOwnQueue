import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-details',
  template: `
  <form (ngSubmit)="onSubmit()" #queueDetails="ngForm">
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
            <timepicker [(ngModel)]="startTime" name="startTime" id="startTime"></timepicker>
        </div>
        <div class="col-xs offset-md-3">
            <label for="closingTime">Closing time</label>
            <timepicker [(ngModel)]="closingTime" name="closingTime" id="closingTime"></timepicker>
        </div>
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Save Changes" />
  </form>
  `
})
export class QueueDetailsComponent implements OnInit {
  startTime: Date = new Date();
  closingTime: Date = new Date();
  submitted: Boolean = false;

  constructor() {
    this.startTime.setHours(9, 0, 0, 0);
    this.closingTime.setHours(17, 0, 0, 0);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }
}
