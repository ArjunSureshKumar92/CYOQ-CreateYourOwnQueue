import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HeaderComponent } from './header/header.component';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { ConfigureQueueComponent } from './configure-queue/configure-queue.component';
import { CreateModeratorComponent } from './create-moderator/create-moderator.component';
import { ModeratorListComponent } from './moderator-list/moderator-list.component';
import { ModeratorDetailsComponent } from './moderator-details/moderator-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { QueueListComponent } from './queue-list/queue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminHomeComponent,
    HeaderComponent,
    CreateQueueComponent,
    ConfigureQueueComponent,
    CreateModeratorComponent,
    ModeratorListComponent,
    ModeratorDetailsComponent,
    CompanyDetailsComponent,
    QueueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
