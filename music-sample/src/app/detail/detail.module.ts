import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailEntityComponent } from './detail-entity/detail-entity.component';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    RouterModule
  ],
  declarations: [DetailComponent, DetailEntityComponent]
})
export class DetailModule { }
