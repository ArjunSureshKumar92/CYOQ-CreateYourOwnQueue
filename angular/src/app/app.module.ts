import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestuiComponent } from './testui/testui.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'book',
    component: TestuiComponent,
    data: { title: 'Books' }
  },
  {
    path: '*',
    component: TestuiComponent,
    data: { title: 'Home' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TestuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
