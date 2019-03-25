import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Queue, QueueAdapter } from '../models/queue.model';


@Injectable({
    providedIn: 'root'
})
export class QueueService {
    uri = 'http://localhost:4200/api/queue/all/';
    constructor(private http: HttpClient, private adapter: QueueAdapter) { }

    createQueue(name: String, description: String, startTime, closeTime) {
        const newQueue = {
            name: name,
            description: description,
            startTime: startTime,
            closeTime: closeTime
        };
        this.http.post(`${this.uri}/create`, newQueue).subscribe(res => console.log('Queue created.'));
    }

    getQueue() { }


    getModerators(callback, instance) {
        var responses;
        this.http.get('http://localhost:4200/api/moderator/all/824187727').subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }


    getAllCompany(callback, instance) {
        var responses;
        this.http.get('http://localhost:4200/api/company/all').subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }
    

    getQueues(callback, instance) {
        var responses;
        this.http.get('http://localhost:4200/api/queue/all/824187727').subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }


    updateQueue() { }

    deleteQueue(queueId) {
        this.http.delete(`${this.uri}/delete`, queueId).subscribe(res => console.log('Queue deleted.'));
    }
}
