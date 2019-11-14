import { Component, OnInit, Input } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
    selector: 'app-moderator-queue-item',
    template: `
    <div class="container-fluid clickable row">
        <h5 class="d-inline col">{{name}}</h5>
        <a href="{{this.qs.baseUri}}/moderator/queue/get/{{companyId}}/{{queueId}}" class="divLink"></a>
    </div>
    `,
    styles: [`
    .container-fluid {
        background: rgb(255,255,255);
        margin: 0.5em;
        padding: 1em 1.5em;
    }
    `]
})
export class ModeratorQueueItemComponent implements OnInit {
    @Input()
    name: String = '';

    @Input()
    queueId: String = '';

    companyId: String = '';

    constructor(private qs: QueueService) {
        this.companyId = this.qs.companyId;
    }

    ngOnInit() {
    }
}
