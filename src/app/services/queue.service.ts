import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Queue, QueueAdapter } from '../models/queue.model';


@Injectable({
    providedIn: 'root'
})
export class QueueService {
    baseUri = 'http://localhost:3000'
    uri = 'http://localhost:4200/api/queue/all/';
    adminId = 'comp231team4@gmail.com';
    companyId = '350195980';

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

    getQueueAdmin(companyId: String, queueId: String): Observable<Queue[]> {
        var url = `${this.baseUri}/admin/${this.adminId}/queue/get/${companyId}/${queueId}`;
        return this.http.get(url).pipe(
            map((data: any[]) => data.map(item => this.adapter.adapt(item)))
        );
    }

    getModerators(callback, instance) {
        var responses;
        this.http.get('http://localhost:4200/api/moderator/all/824187727').subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    getModeratorId() {
        return '123';
    }

    getAllCompany(callback, instance) {
        var responses;
        this.http.get('http://localhost:4200/api/company/all').subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }
    

    getQueues(callback, instance, moderatorId?) {
        var responses;
        var url = 'http://localhost:4200/api/queue/all/824187727';

        if (moderatorId) {
            url = `http://localhost:4200/api/queue/get/824187727/${moderatorId}`;
        }

        this.http.get(url).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }


    updateQueue() { }

    deleteQueue(queueId) {
        this.http.delete(`${this.uri}/delete`, queueId).subscribe(res => console.log('Queue deleted.'));
    }

    getTickets(callback, instance, queueId) {
        var responses;
        this.http.get(`http://localhost:4200/api/ticket/get/824187727/${queueId}/all`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }
}
