import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-queue',
  template: `
  <form (ngSubmit)="submit()">
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
            <label for="closeTime">Closing time</label>
            <timepicker [(ngModel)]="closeTime" name="closeTime" id="closeTime"></timepicker>
        </div>
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Create Queue" />
  </form>
  `
})
export class CreateQueueComponent implements OnInit {
  startTime: Date = new Date();
  closeTime: Date = new Date();

  constructor() {
    this.startTime.setHours(9, 0, 0, 0);
    this.closeTime.setHours(17, 0, 0, 0);
  }

  ngOnInit() { }
}
