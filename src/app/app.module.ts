import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateQueueComponent } from './components/create-queue/create-queue.component';
import { CreateModeratorComponent } from './components/create-moderator/create-moderator.component';
import { ModeratorListComponent } from './components/moderator-list/moderator-list.component';
import { ModeratorDetailsComponent } from './components/moderator-details/moderator-details.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { QueueListComponent } from './components/queue-list/queue-list.component';
import { QueueItemComponent } from './components/queue-item/queue-item.component';
import { QueueDetailsComponent } from './components/queue-details/queue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminHomeComponent,
    HeaderComponent,
    CreateQueueComponent,
    CreateModeratorComponent,
    ModeratorListComponent,
    ModeratorDetailsComponent,
    CompanyDetailsComponent,
    QueueListComponent,
    QueueItemComponent,
    QueueDetailsComponent
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
