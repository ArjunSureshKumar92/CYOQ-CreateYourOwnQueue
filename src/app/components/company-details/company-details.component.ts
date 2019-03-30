import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';


@Component({
  selector: 'app-company-details',
  template: `
  <h1 class="text-center">Company Profile</h1>
  <div class="container-fluid">
    <div class="form-group">
      <label for="name">Company name</label>
      <input type="text" disabled="disabled" class="form-control form-control-lg" id="name" name="name" value="Centennial College" />
    </div>
    <div class="form-group">
      <label for="name">Address</label>
      <input type="text" disabled="disabled" class="form-control" id="address" name="address" value="Progress Ave" />
    </div>
    <div class="form-group">
      <label for="name">Company website</label>
      <input type="text" disabled="disabled" class="form-control" id="website" name="website" value="www.centennialcollege.ca" />
    </div>
    <div class="form-group">
      <label for="name">Phone</label>
      <input type="text" disabled="disabled" class="form-control" id="phone" name="phone" value="4162895000" />
    </div>
    <div class="form-group">
      <label for="name">No. of employees</label>
      <input type="text" disabled="disabled" class="form-control" id="employeeNum" name="employeeNum" value="20" />
    </div>
  </div>
  `
})
export class CompanyDetailsComponent implements OnInit {
    company: any;

    constructor(private qs: QueueService) {
        this.company = [];
        this.getCompany();
    }

    getCompany() {
      this.qs.getAllCompany(this.getCallback,this)
    }

    getCallback(val,instance) {
      console.log("val"+val[0].name);
      instance.company = val; 
    }

    ngOnInit() {
    }
}