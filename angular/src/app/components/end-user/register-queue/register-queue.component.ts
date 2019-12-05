import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-queue',
    template: `
    <form [formGroup]="regForm" (ngSubmit)="submit()" #form>
        <div class="form-group">
            <label>You are registering for:</label>
            <h3>{{queue.name}}</h3>
        </div>
        <div class="form-group">
            <label>Description</label>
            <p>{{queue.description}}</p>
        </div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" formControlName="name" id="name" name="name" placeholder="e.g. Bob Ross" />
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="text" class="form-control" formControlName="email" id="email" name="email" placeholder="e.g. test123@email.com" />
        </div>
        <div hidden>
            <input type="text" class="form-control" id="companyId" name="companyId" value="{{companyId}}" />
        </div>
        <div hidden>
            <input type="text" class="form-control" id="queueId" name="queueId" value="{{queueId}}" />
        </div>
        <input type="submit" class="btn btn-primary btn-block btn-lg" [disabled]="regForm.pristine || regForm.invalid" value="Register" />
    </form>
    `
})
export class RegisterQueueComponent implements OnInit {
    regForm: FormGroup;
    queue: any;
    companyId: String = '';
    queueId: String = '';

    constructor(private fb: FormBuilder, private qs: QueueService, private router: Router) {
        let url = this.router.url.split('/');
        this.queueId = url[url.length - 2];
        this.companyId = this.qs.companyId;
        this.getQueue();
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.regForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    getQueue() {
        this.qs.getQueueAdmin(this.companyId, this.queueId).subscribe(
            res => {
                console.log(res);
                this.queue = res['response'];
            },
            err => { console.log(err); },
            () => { console.log('Retrieved queue info.'); }
        );
    }

    submit() {
        console.log("register user for queue called");
        let data = {
            'name': this.regForm.get('name').value,
            'email': this.regForm.get('email').value,
            'companyId': this.companyId,
            'queueId': this.queueId
        }
        this.qs.createTicket(data).subscribe(
            res => {
                console.log("Response received from server");
                console.log(res.toString());
                this.router.navigateByUrl(`/user/view/${this.regForm.get('email').value}`);
            },
            err => { console.log(err); },
            () => { console.log('Registered for queue.'); }
        )
    }
}
