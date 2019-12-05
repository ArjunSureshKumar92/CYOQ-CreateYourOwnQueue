import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-moderator-queue',
    template: `
    <form (ngSubmit)="submit()">
        <input type="submit" value="Call Next" class="btn btn-primary btn-lg btn-block" name="call" id="call" />
        <app-end-user-list [tickets]="tickets" [queueId]="queueId"></app-end-user-list>
        <input type="button" (click)="closeRegistration()" value="Close Registration" class="btn btn-danger btn-lg btn-block" name="close" id="close" />
    </form>
    `
})
export class ModeratorQueueComponent implements OnInit {
    angForm: FormGroup;
    companyId: String = '';
    moderatorId: String = '';
    queueId: String = '';
    tickets: any[];

    constructor(private location: Location, private qs: QueueService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.queueId = params.get('queueId');
            this.companyId = params.get('companyId');
            this.moderatorId = params.get('moderatorId');
            this.getTickets();
        });
    }

    getTickets() {
        this.qs.getActiveTickets(this.moderatorId, this.queueId).subscribe(
            res => {
                this.tickets = res['response'];
                console.log(this.tickets);
            },
            err => {
                console.log(err);
            }
        );
    }

    submit() {
        let data = {
            companyId: this.companyId,
            queueId: this.queueId
        }
        this.qs.callTicket(data, this.moderatorId).subscribe(
            res => {
                this.getTickets();
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
