import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CreateQueueComponent } from './components/admin/create-queue/create-queue.component';
import { CreateModeratorComponent } from './components/admin/create-moderator/create-moderator.component';
import { ModeratorListComponent } from './components/admin/moderator-list/moderator-list.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';
import { ModeratorQueueListComponent } from './components/moderator/moderator-queue-list/moderator-queue-list.component';
import { EndUserHomeComponent } from './components/end-user/enduser-home/enduser-home.component';
import { ModeratorQueueComponent } from './components/moderator/moderator-queue/moderator-queue.component';
import { RegisterQueueComponent } from './components/end-user/register-queue/register-queue.component';
import { ModeratorDetailsComponent } from './components/admin/moderator-details/moderator-details.component';
import { QueueDetailsComponent } from './components/admin/queue-details/queue-details.component';
import { EndUserListComponent } from './components/moderator/end-user-list/end-user-list.component';
import { TicketDetailsComponent } from './components/moderator/ticket-details/ticket-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin/queue/list',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        children: [
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
                        path: 'view/:companyId/:queueId',
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
                    },
                    {
                        path: 'view/:companyId/:moderatorId',
                        component: ModeratorDetailsComponent
                    }
                ]
            },
            {
                path: 'company',
                component: CompanyDetailsComponent
            }
        ]
    },
    {
        path: 'user',
        children: [
            {
                path: ':company/:queue',
                children: [
                    {
                        path: 'view',
                        component: EndUserHomeComponent
                    },
                    {
                        path: 'register',
                        component: RegisterQueueComponent
                    }
                ],
            }
        ]
    },
    {
        path: 'moderator',
        children: [
            {
                path: ':moderatorId',
                children: [
                    {
                        path: 'queue',
                        children: [
                            {
                                path: 'list',
                                component: ModeratorQueueListComponent
                            },
                            {
                                path: 'get/:companyId/:queueId',
                                children: [
                                    {
                                        path: '',
                                        component: ModeratorQueueComponent
                                    },
                                    {
                                        path: 'tickets',
                                        component: EndUserListComponent
                                    },
                                    {
                                        path: 'ticket/:ticketId',
                                        component: TicketDetailsComponent
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
