import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CreateQueueComponent } from './components/admin/create-queue/create-queue.component';
import { CreateModeratorComponent } from './components/admin/create-moderator/create-moderator.component';
import { ModeratorListComponent } from './components/admin/moderator-list/moderator-list.component';
import { ModeratorItemComponent } from './components/admin/moderator-item/moderator-item.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';
import { CompanyListComponent } from './components/admin/company-list/company-list.component';
import { CompanyItemComponent } from './components/admin/company-item/company-item.component';
import { QueueListComponent } from './components/admin/queue-list/queue-list.component';
import { QueueItemComponent } from './components/admin/queue-item/queue-item.component';
import { FilterPipe } from './filter.pipe';
import { EndUserHomeComponent } from './components/end-user/enduser-home/enduser-home.component';
import { ModeratorHomeComponent } from './components/moderator/moderator-home/moderator-home.component';
import { EndUserListComponent } from './components/moderator/end-user-list/end-user-list.component';
import { TicketItemComponent } from './components/moderator/ticket-item/ticket-item.component';
import { ModeratorQueueListComponent } from './components/moderator/moderator-queue-list/moderator-queue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminHomeComponent,
    HeaderComponent,
    CreateQueueComponent,
    CreateModeratorComponent,
    ModeratorListComponent,
    CompanyDetailsComponent,
    QueueListComponent,
    QueueItemComponent,
    ModeratorItemComponent,
    CompanyListComponent,
    CompanyItemComponent,
    FilterPipe,
    EndUserHomeComponent,
    ModeratorHomeComponent,
    EndUserListComponent,
    TicketItemComponent,
    ModeratorQueueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
