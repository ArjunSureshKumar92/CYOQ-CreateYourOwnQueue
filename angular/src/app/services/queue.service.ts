import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Queue, QueueAdapter } from '../models/queue.model';
import { Moderator } from '../models/moderator.model';


@Injectable({
    providedIn: 'root'
})
export class QueueService {
    baseUri = 'https://cyoqappbyrj.herokuapp.com'
    adminId = 'comp313.2019@gmail.com';
    companyId = '496477151';
    moderatorId = '126755968333';

    constructor(private http: HttpClient, private adapter: QueueAdapter) { }

    createQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/create`, data);
    }
    createModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/create`, data);
    }

    createTicket(data) {
        return this.http.post(`${this.baseUri}/api/user/ticket/create`, data);
    }

    getQueueAdmin(companyId: String, queueId: String) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/queue/get/${companyId}/${queueId}`);
    }

    getModerator(moderatorId) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/moderator/get/${this.companyId}/${moderatorId}`);
    }

    getModerators() {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/moderator/all/${this.companyId}`);
    }

    getModeratorId() {
        return '123';
    }

    getCompany(companyId) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/company/get/${companyId}`);
    }

    getAllCompany(callback, instance) {
        var responses;
        this.http.get(`${this.baseUri}/api/admin/company/all`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    getQueue(callback, instance, queueId) {
        var responses;
        this.http.get(`${this.baseUri}/api/admin/${this.adminId}/queue/get/${this.companyId}/${queueId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }

    getQueues(callback, instance, moderatorId?) {
        var responses;
        var url = `${this.baseUri}/api/admin/${this.adminId}/queue/all/${this.companyId}`;

        if (moderatorId) {
            url = `${this.baseUri}/api/moderator/${moderatorId}/queue/get/${this.companyId}`;
        }

        this.http.get(url).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    // getTickets(callback, instance, queueId) {
    //     var responses;
    //     this.http.get(`${this.baseUri}/api/ticket/get/${this.companyId}/${queueId}/all`).subscribe(data => {
    //         responses = data;
    //         console.log(responses.response[0].name);
    //         callback(responses.response, instance);
    //     });
    // }

    getTickets(callback, instance, userId) {
        var responses;
        this.http.get(`${this.baseUri}/api/user/${userId}/queue/get/${this.companyId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }

    getTicketPriority(userId, queueId, ticketId, callback, instance) {
        return this.http.get(`${this.baseUri}/api/user/${userId}/ticket/getposition/${this.companyId}/${queueId}/${ticketId}`).subscribe((s) => {
            callback(s['response'].toString(), instance);
            console.log(s);
        }, err => { console.log(err); callback(err['response'].toString(), instance); });
    }

    updateQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/update`, data);
    }

    updateCompany(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/company/update`, data);
    }

    updateModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/update`, data);
    }

    callTicket(data, moderatorId) {
        return this.http.post(`${this.baseUri}/api/moderator/${moderatorId}/ticket/next`, data);
    }

    deleteQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/delete`, data);
    }

    deleteModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/delete`, data);
    }

    closeTicket(data) {
        return this.http.post(`${this.baseUri}/api/user/${this.adminId}/ticket/delete`, data);
    }
    deleteTicket(ticketId, userId, callback, instance) {
        // console.log("Delete Ticket Called ");
        // console.log(data);
        // return this.http.delete(`${this.baseUri}/api/user/${userId}/ticket/delete`, data).subscribe(data => {
        //     callback();
        // });
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                'companyId': this.companyId,
                'ticketId': ticketId
            },
        };
        this.http
            .delete(`${this.baseUri}/api/user/${userId}/ticket/delete`, options)
            .subscribe((s) => {
                console.log(s);
                callback(instance)
            });
    }
}
