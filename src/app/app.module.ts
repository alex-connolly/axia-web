import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import './rxjs-extensions';
import { AppComponent } from './app.c';
import { routing, routedComponents } from './app.routing';
import {LoginComponent} from "./login/login.c";
import {FooterComponent} from "./fixed/footer/footer.c";
import {HeaderComponent} from "./fixed/header/header.c";

export const addedComponents = [ LoginComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule,
    CommonModule
  ],
  declarations: [ AppComponent, routedComponents, addedComponents],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
