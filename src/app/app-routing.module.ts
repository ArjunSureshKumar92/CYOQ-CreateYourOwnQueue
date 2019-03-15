import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { CreateModeratorComponent } from './create-moderator/create-moderator.component';

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
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
