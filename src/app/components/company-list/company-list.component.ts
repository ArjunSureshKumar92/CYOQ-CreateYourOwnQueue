import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-company-list',
  template: `
  <h1 class="text-center">Company Profile</h1>
  <div class="container-fluid">
    <app-company-item *ngFor="let c of company" name="{{c.name}}"></app-company-item>
    <h6>Address: Progress Ave</h6>
    <h6>Company Website: www.centennialcollege.ca</h6>
    <h6>Phone: 4162895000</h6>
    <h6>Number of Employees: 20</h6>
  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }
  `]
})
export class CompanyListComponent implements OnInit {
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
