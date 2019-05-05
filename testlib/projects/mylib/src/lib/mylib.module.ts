import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { MylibComponent } from './mylib.component';

@NgModule({
  declarations: [MylibComponent],
  imports: [
  CommonModule
  ],
  exports: [MylibComponent]
})
export class MylibModule { }
