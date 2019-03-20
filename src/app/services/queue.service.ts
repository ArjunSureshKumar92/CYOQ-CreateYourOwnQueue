import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queue } from '../models/queue.model';

@Injectable({
    providedIn: 'root'
})
export class QueueService {
    uri = 'http://localhost:4200/api/queue';
    constructor(private http: HttpClient) { }

    createQueue(name: String, description: String, startTime, closeTime) {
        const newQueue = {
            name: name,
            description: description,
            startTime: startTime,
            closeTime: closeTime
        };
        this.http.post(`${this.uri}/create`, newQueue).subscribe(res => console.log('Queue created.'));
    }

    getQueue() {}

    getQueues(): Queue[] {
        return [
            new Queue('Registration', '', new Date(), new Date()),
            new Queue('Food service', '', new Date(), new Date()),
            new Queue('Counselling', '', new Date(), new Date()),
        ];
    }

    updateQueue() {}

    deleteQueue(queueId) {
        this.http.delete(`${this.uri}/delete`, queueId).subscribe(res => console.log('Queue deleted.'));
    }
}
