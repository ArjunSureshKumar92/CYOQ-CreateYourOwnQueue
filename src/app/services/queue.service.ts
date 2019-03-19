import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  uri = 'http://localhost:3000/api/queue';
  constructor(private http: HttpClient) { }

  createQueue(name, description, startTime, closeTime) {
      const newQueue = {
          name: name,
          description: description,
          startTime: startTime,
          closeTime: closeTime
      };
      this.http.post(`${this.uri}/create`, newQueue);
  }
}
