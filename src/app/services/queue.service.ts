import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Queue, QueueAdapter } from '../models/queue.model';
import { Moderator } from '../models/moderator.model';


@Injectable({
    providedIn: 'root'
})
export class QueueService {
    baseUri = 'http://localhost:3000'
    uri = 'http://localhost:3000/queue/all/';
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

    getModerator(callback, instance, moderatorId) {
        var responses;
        this.http.get(`${this.baseUri}/admin/${this.adminId}/moderator/get/${this.companyId}/${moderatorId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }

    getModerators(callback, instance) {
        var responses;
        this.http.get(`${this.baseUri}/admin/${this.adminId}/moderator/all/${this.companyId}`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    getModeratorId() {
        return '123';
    }

    getCompany(callback, instance, companyId) {
        var responses;
        this.http.get(`${this.baseUri}/admin/${this.adminId}/company/get/${companyId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }

    getAllCompany(callback, instance) {
        var responses;
        this.http.get(`${this.baseUri}/admin/company/all`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    getQueue(callback, instance, queueId) {
        var responses;
        this.http.get(`${this.baseUri}/admin/${this.adminId}/queue/get/${this.companyId}/${queueId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }

    getQueues(callback, instance, moderatorId?) {
        var responses;
        var url = `${this.baseUri}/admin/${this.adminId}/queue/all/${this.companyId}`;

        if (moderatorId) {
            url = `${this.baseUri}/moderator/${moderatorId}/queue/get/${this.companyId}`;
        }

        this.http.get(url).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    getTickets(callback, instance, queueId) {
        var responses;
        this.http.get(`${this.baseUri}/api/ticket/get/${this.companyId}/${queueId}/all`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }


    updateQueue() { }

    updateCompany(data) {
        this.http.put(`${this.baseUri}/admin/${this.adminId}/company/update`, data).subscribe(res => console.log('Company updated.'));
    }

    deleteQueue(queueId) {
        this.http.delete(`${this.uri}/delete`, queueId).subscribe(res => console.log('Queue deleted.'));
    }

    deleteModerator(data) {
        this.http.delete(`${this.baseUri}/admin/${this.adminId}/moderator/delete`, data).subscribe(res => console.log('Moderator deleted.'));
    }
}
