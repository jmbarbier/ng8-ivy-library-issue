import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MylibModule } from "mylib";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
  MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
