import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Queue {
    constructor(
        public name: String,
        public description: String,
        public startTime: Date,
        public closeTime: Date
    ) {}

    public get status() : string {
        let currentDate: Date = new Date();
        let currentHour: number = currentDate.getHours();
        let currentMin: number = currentDate.getMinutes();
        
        if (this.startTime.getHours() <= currentHour
        && this.startTime.getMinutes() <= currentMin
        && this.closeTime.getHours() >= currentHour
        && this.closeTime.getMinutes() > currentMin) {
            return 'Open';
        } else {
            return 'Closed';
        }        
    }
}

@Injectable({
    providedIn: 'root'
})
export class QueueAdapter implements Adapter<Queue> {
    adapt(item: any): Queue {
        return new Queue(
            item.name,
            item.description,
            new Date(item.startTime),
            new Date(item.closeTime)
        );
    }
}
