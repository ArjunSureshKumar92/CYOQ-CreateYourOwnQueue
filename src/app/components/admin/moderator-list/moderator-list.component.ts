import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';



@Component({
  selector: 'app-moderator-list',
  template: `
  <h1 class="text-center">Moderators</h1>
  <div class="text-right">
    <a href="http://localhost:4200/admin/moderator/create" class="btn btn-primary">+ Add Moderator</a>
  </div>
  <div class="container-fluid">
    <app-moderator-item *ngFor="let m of moderators" name="{{m.name}}" moderatorId="{{m.moderatorId}}"></app-moderator-item>
  </div>
  `,
  styles: [`
  .container-fluid {
    background: rgb(240,240,240);
    margin: 0.5em auto;
    padding: 1em;
  }
  `]
})
export class ModeratorListComponent implements OnInit {
    moderators: any;
    adminId: String = '';

    constructor(private qs: QueueService) {
        this.moderators = [];
        this.getModerator();
        this.adminId = this.qs.adminId;
    }

    getModerator() {
      this.qs.getModerators(this.getCallback,this)
    }

    getCallback(val,instance) {
      console.log("val"+val[0].name);
      instance.moderators = val; 
    }

    ngOnInit() {
    }

}

