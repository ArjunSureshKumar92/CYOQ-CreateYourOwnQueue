import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';


@Component({
  selector: 'app-company-details',
  template: `
  <h1 class="text-center">Company Profile</h1>
  <form action="http://localhost:4200/api/company/update" method="PUT">
    <div class="container-fluid">
        <div class="form-group">
            <label for="name">Company name</label>
            <input type="text" class="form-control form-control-lg" id="name" name="name" value="Centennial College" />
        </div>
        <div class="form-group">
            <label for="name">Address</label>
            <input type="text" class="form-control" id="address" name="address" value="Progress Ave" />
        </div>
        <div class="form-group">
            <label for="name">Company website</label>
            <input type="text" class="form-control" id="website" name="website" value="www.centennialcollege.ca" />
        </div>
        <div class="form-group">
            <label for="name">Phone</label>
            <input type="text" class="form-control" id="phone" name="phone" value="4162895000" />
        </div>
        <div class="form-group">
            <label for="name">No. of employees</label>
            <input type="text" class="form-control" id="employeeNum" name="employeeNum" value="20" />
        </div>
        <input type="text" class="form-control" id="companyId" name="companyId" value="824187727" />
        <input type="submit" class="btn btn-primary btn-block btn-lg" value="Save" (click)="form.submit()" />
    </div>
  </form>
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