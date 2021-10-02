import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Leason2RoutingModule } from './leason2-routing.module';
import { ArrayComponent } from './array/array.component';

@NgModule({
  imports: [
    CommonModule,
    Leason2RoutingModule
  ],
  declarations: [ArrayComponent]
})
export class Leason2Module { }
