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
        <app-end-user-list [ticket]="ticket" [queueId]="queueId" [moderatorId]="moderatorId"></app-end-user-list>
    </form>
    `
})
export class ModeratorQueueComponent implements OnInit {
    angForm: FormGroup;
    companyId = '';
    moderatorId = '';
    queueId = '';
    ticket: any;

    constructor(private location: Location, private qs: QueueService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.queueId = params.get('queueId');
            this.companyId = params.get('companyId');
            this.moderatorId = params.get('moderatorId');
            this.getActiveTicket();
        });
    }

    getActiveTicket() {
        this.qs.getActiveTickets(this.moderatorId, this.queueId).subscribe(
            res => {
                this.ticket = res['response'];
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
                this.getActiveTicket();
                this.router.navigateByUrl(this.router.url);
            },
            err => { console.log(err); },
            () => { console.log('Called next ticket.'); }
        );
    }
}
