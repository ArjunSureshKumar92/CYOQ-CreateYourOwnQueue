import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enduser-home',
  template: `
  <div class="text-center">
    <p class="text-uppercase">Your place in the queue:</p>
    <h1 class="display-1">#2</h1>
    <button class="btn btn-danger btn-lg">Cancel your place</button>
  </div>
  `
})
export class EndUserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
