import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Queue {
    constructor(
        public name: String,
        public queueId: String,
        public description: String
    ) {}
}

@Injectable({
    providedIn: 'root'
})
export class QueueAdapter implements Adapter<Queue> {
    adapt(item: any): Queue {
        return new Queue(
            item.name,
            item.queueId,
            item.description
        );
    }
}
