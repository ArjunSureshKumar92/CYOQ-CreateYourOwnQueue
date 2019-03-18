import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-queue',
  template: `
  <form method="post">
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="form-group">
        <label for="name">Queue name</label>
        <input type="text" class="form-control form-control-lg" id="name" name="name" >
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Create Queue" />
  </form>
  `,
  styles: [``]
})
export class CreateQueueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
