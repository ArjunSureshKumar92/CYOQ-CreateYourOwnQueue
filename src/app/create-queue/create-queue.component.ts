import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-create-queue',
  template: `
  <form method="post">
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
    <div id="starttime"></div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" value="Create Queue" />
  </form>

  <script>
    var config = {
        target: 'starttime'
    };
    var startPicker = new MtrDatepicker(config);
  </script>
  `,
  styles: [``]
})
export class CreateQueueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      //get('../../../node_modules/mtr-datepicker/dist/mtr-datepicker.min.css', () => {})
  }

}
