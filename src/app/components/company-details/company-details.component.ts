import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-company-details',
  template: `
  <h1 class="text-center">Company</h1>
  <div class="text-right">
  <a href="http://localhost:4200/api/company/create" class="btn btn-primary">+ Add Company</a>
  </div>
  `
})

export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
