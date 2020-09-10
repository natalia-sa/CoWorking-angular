import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './app.router';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormComponent } from './form/form.component';
import {WorkstationsService} from './workstations.service'
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WorkstationComponent,
    PageHeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WorkstationsService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
