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
    moderatorId = '126755968';

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

    createModerator(data) {
        return this.http.post(`${this.baseUri}/admin/${this.adminId}/moderator/create`, data);
    }

    createTicket(data) {
        return this.http.post(`${this.baseUri}/user/ticket/create`, data);
    }

    getQueueAdmin(companyId: String, queueId: String) {
        return this.http.get(`${this.baseUri}/admin/${this.adminId}/queue/get/${companyId}/${queueId}`);
    }

    getModerator(callback, instance, moderatorId) {
        return this.http.get(`${this.baseUri}/admin/${this.adminId}/moderator/get/${this.companyId}/${moderatorId}`);
    }

    getModerators() {
        return this.http.get(`${this.baseUri}/admin/${this.adminId}/moderator/all/${this.companyId}`);
    }

    getModeratorId() {
        return '123';
    }

    getCompany(companyId) {
        return this.http.get(`${this.baseUri}/admin/${this.adminId}/company/get/${companyId}`);
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

    getTicketPriority(queueId, ticketId) {
        return this.http.get(`${this.baseUri}/user/${this.companyId}/ticket/getposition/${this.companyId}/${queueId}/${ticketId}`);
    }

    updateQueue(data) {
        return this.http.post(`${this.baseUri}/admin/${this.adminId}/queue/update`, data);
    }

    updateCompany(data) {
        return this.http.post(`${this.baseUri}/admin/${this.adminId}/company/update`, data);
    }

    updateModerator(data) {
        return this.http.post(`${this.baseUri}/admin/${this.adminId}/moderator/update`, data);
    }

    callTicket(data, moderatorId) {
        return this.http.post(`${this.baseUri}/moderator/${moderatorId}/ticket/next`, data);
    }

    deleteQueue(data) {
        return this.http.post(`${this.baseUri}/admin/${this.adminId}/queue/delete`, data);
    }

    deleteModerator(data) {
        return this.http.post(`${this.baseUri}/admin/${this.adminId}/moderator/delete`, data);
    }

    closeTicket(data) {
        return this.http.post(`${this.baseUri}/user/${this.adminId}/ticket/delete`, data);
    }
}
