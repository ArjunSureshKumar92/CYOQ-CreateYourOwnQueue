import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-moderator-queue',
    template: `
    <form (ngSubmit)="submit()">
        <input type="submit" value="Call Next" class="btn btn-primary btn-lg btn-block" name="call" id="call" />
        <app-end-user-list queueId="{{queueId}}"></app-end-user-list>
        <input type="button" (click)="closeRegistration()" value="Close Registration" class="btn btn-danger btn-lg btn-block" name="close" id="close" />
    </form>
    `
})
export class ModeratorQueueComponent implements OnInit {
    angForm: FormGroup;
    companyId: String = '';
    moderatorId: String = '';
    queueId: String = '';

    constructor(private location: Location, private qs: QueueService, private router: Router) {
        let url = this.router.url.split('/');
        this.queueId = url[url.length - 1];
        this.companyId = url[url.length - 2];
        this.moderatorId = this.qs.moderatorId;
    }

    ngOnInit() {
    }

    submit() {
        let data = {
            companyId: this.companyId,
            queueId: this.queueId
        }
        this.qs.callTicket(data, this.moderatorId).subscribe(
            res => {
                this.router.navigateByUrl(this.router.url);
            },
            err => { console.log(err); },
            () => { console.log('Called next ticket.'); }
        );
    }

    closeRegistration() {
        let data = {
            companyId: this.companyId,
            queueId: this.queueId
        }
    }
}