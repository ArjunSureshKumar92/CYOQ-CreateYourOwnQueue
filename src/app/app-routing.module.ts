import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { CreateModeratorComponent } from './create-moderator/create-moderator.component';
import { ModeratorListComponent } from './moderator-list/moderator-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'queue',
    children: [
        {
            path: 'create',
            component: CreateQueueComponent
        }
    ]
  },
  {
    path: 'moderator',
    children: [
        {
            path: 'create',
            component: CreateModeratorComponent
        },
        {
            path: 'list',
            component: ModeratorListComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
