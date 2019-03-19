import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

    updateQueue() {}

    deleteQueue(queueId) {
        this.http.delete(`${this.uri}/delete`, queueId).subscribe(res => console.log('Queue deleted.'));
    }
}
