import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
      <nav class="navbar navbar-fixed-top">
        <div class="navbar-header">
          <a routerLink=""><h1 class="navbar-brand">{{company}}</h1></a>
        </div>
      </nav>
    </div>
  `
})
export class HeaderComponent implements OnInit {
    company = 'Create Your Own Queue';
    companyId: String = '';

    constructor(private qs: QueueService) {
        this.companyId = this.qs.companyId;
        this.getCompany();
    }

    ngOnInit() {
    }

    getCompany() {
        this.qs.getCompany(this.companyId).subscribe(res => this.company = res['response'].name);
    }
}
