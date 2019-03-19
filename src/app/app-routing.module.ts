import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CreateQueueComponent } from './components/create-queue/create-queue.component';
import { CreateModeratorComponent } from './components/create-moderator/create-moderator.component';
import { ModeratorListComponent } from './components/moderator-list/moderator-list.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { QueueDetailsComponent } from './components/queue-details/queue-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/queue/list',
    pathMatch: 'full'
  },
  {
    path: 'queue',
    children: [
        {
            path: 'list',
            component: AdminHomeComponent
        },
        {
            path: 'create',
            component: CreateQueueComponent
        },
        {
            path: 'details/:queue',
            component: QueueDetailsComponent
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
  },
  {
      path: 'company',
      component: CompanyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
