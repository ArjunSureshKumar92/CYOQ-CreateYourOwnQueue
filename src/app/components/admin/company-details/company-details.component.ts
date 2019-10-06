import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-company-details',
  template: `
  <div>
    <app-navbar></app-navbar>
  </div>
  <h1 class="text-center">Company Profile</h1>
  <form [formGroup]="angForm" (ngSubmit)="form.submit()" action="http://localhost:3000/admin/{{adminId}}/company/update" method="POST" #form>
    <div class="container-fluid">
        <div class="form-group">
            <label for="name">Company name</label>
            <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
        </div>
        <div class="form-group">
            <label for="name">Address</label>
            <input type="text" class="form-control" formControlName="address" id="address" name="address" />
        </div>
        <div class="form-group">
            <label for="name">Phone</label>
            <input type="text" class="form-control" formControlName="phone" id="phone" name="phone" />
        </div>
        <div class="form-group">
            <label for="name">Email</label>
            <input type="text" class="form-control" formControlName="email" id="email" name="email" />
        </div>
        <div hidden>
            <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        </div>
        <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Save" />
    </div>
  </form>
  `
})
export class CompanyDetailsComponent implements OnInit {
    company: any;
    companyId: String = '';
    adminId: String = '';
    angForm: FormGroup;

    constructor(private fb: FormBuilder, private qs: QueueService) {
        this.company = [];
        this.companyId = this.qs.companyId;
        this.adminId = this.qs.adminId;
        this.createForm();
        this.getCompany();
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    getCompany() {
        this.qs.getCompany(this.companyId).subscribe(
            res => {
                this.company = res['response'];
                this.setValues();
            },
            err => { console.log(err); },
            () => { console.log('Retrieved company details.') }
        );
    }

    setValues() {
        this.angForm.get('name').setValue(this.company.name);
        this.angForm.get('email').setValue(this.company.email);
        this.angForm.get('phone').setValue(this.company.phone);
        this.angForm.get('address').setValue(this.company.address);
    }

    ngOnInit() {
    }
    
}