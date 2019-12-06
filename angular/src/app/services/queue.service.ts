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
    baseUri = 'https://cyoq-web.herokuapp.com';
    adminId = 'comp313.2019@gmail.com';
    companyId = '496477151';

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

    getCompany(companyId) {
        return this.http.get(`${this.baseUri}/api/admin/${this.adminId}/company/get/${companyId}`);
    }

    getAllCompany(callback, instance) {
        let responses;
        this.http.get(`${this.baseUri}/api/admin/company/all`).subscribe(data => {
            responses = data;
            console.log(responses.response[0].name);
            callback(responses.response, instance);
        });
    }

    getQueue(callback, instance, queueId) {
        let responses;
        this.http.get(`${this.baseUri}/api/admin/${this.adminId}/queue/get/${this.companyId}/${queueId}`).subscribe(data => {
            responses = data;
            console.log(responses);
            callback(responses.response, instance);
        });
    }

    getQueues(moderatorId?) {
        let url = `${this.baseUri}/api/admin/${this.adminId}/queue/all/${this.companyId}`;
        if (moderatorId) {
            url = `${this.baseUri}/api/moderator/${moderatorId}/queue/get/${this.companyId}`;
        }

        return this.http.get(url);
    }

    getActiveTickets(moderatorId, queueId) {
        return this.http.get(`${this.baseUri}/api/moderator/${moderatorId}/ticket/active/${this.companyId}/${queueId}`);
    }

    getUserTickets(callback, instance, userId) {
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
        }, err => { console.log(err); var err1 = err['error']; callback(err1['response'].toString(), instance); });
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
        return this.http.put(`${this.baseUri}/api/moderator/${moderatorId}/ticket/next`, data);
    }

    deleteQueue(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/queue/delete`, data);
    }

    deleteModerator(data) {
        return this.http.post(`${this.baseUri}/api/admin/${this.adminId}/moderator/delete`, data);
    }

    closeTicket(data, moderatorId) {
        return this.http.put(`${this.baseUri}/api/moderator/${moderatorId}/ticket/close`, data);
    }
    deleteTicket(ticketId, userId, callback, instance) {
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
            .subscribe((res) => {
                console.log(res);
                console.log(res['response']);
                console.log(res['response'].toString().includes('active ticket'));
                console.log(res['response'].toString().includes('next in queue'));

                if (res['response'].toString().includes('Success')) {
                    callback(instance, '200')
                }
                else if (res['response'] != null && res['response'].toString().includes('active ticket')) {
                    callback(instance, '201')
                } else if (res['response'] != null && res['response'].toString().includes('next in queue')) {
                    callback(instance, '202')
                } else if (res['response'] != null && res['response'].toString().includes('already closed')) {
                    callback(instance, '203')
                }
            });
    }
}
