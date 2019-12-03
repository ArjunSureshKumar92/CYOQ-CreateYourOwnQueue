import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ticket-details',
  template: `
  <div>
    <app-moderator-navbar></app-moderator-navbar>
  </div>
  <form [formGroup]="angForm" (ngSubmit)="submit()" #form>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control form-control-lg" formControlName="name" id="name" name="name" />
    </div>
    <div class="form-group">
        <label for="name">Email</label>
        <input type="text" class="form-control" formControlName="email" id="email" name="email" />
    </div>
    <div class="form-group">
        <label for="description">Notes</label>
        <input type="text" class="form-control" formControlName="description" id="description" name="description" />
    </div>
    <div hidden>
        <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        <input type="text" class="form-control" id="ticketId" name="ticketId" value="{{ticketId}}" />
    </div>
    <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="angForm.pristine || angForm.invalid" value="Close Ticket" />
  </form>
  `
})
export class TicketDetailsComponent implements OnInit {
    angForm: FormGroup;
    companyId: String = '';
    ticketId: String = '';

    constructor(private location: Location, private fb: FormBuilder,
    private qs: QueueService, private router: Router) {
        let url = this.router.url.split('/');
        this.ticketId = url[url.length - 1];
        this.companyId = url[url.length - 4];
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.angForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    submit() {
        let data = {
            companyId: this.companyId,
            ticketId: this.ticketId
        };
        this.qs.closeTicket(data).subscribe(
            res => {
                this.location.back();
            },
            err => { console.log(err); },
            () => { console.log(); }
        );
    }
}
