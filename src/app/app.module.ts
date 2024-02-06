import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CbFormComponent } from './cb-form/cb-form.component';
import { Router } from '@angular/router';
import { FormService } from './form.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourceRegComponent } from './cource-reg/cource-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    CbFormComponent,
    CourceRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule  {
  

}

