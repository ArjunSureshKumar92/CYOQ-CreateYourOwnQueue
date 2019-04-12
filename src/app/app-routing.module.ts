import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CreateQueueComponent } from './components/admin/create-queue/create-queue.component';
import { CreateModeratorComponent } from './components/admin/create-moderator/create-moderator.component';
import { ModeratorListComponent } from './components/admin/moderator-list/moderator-list.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';

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
