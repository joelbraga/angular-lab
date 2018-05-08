import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailSongComponent } from './detail-song/detail-song.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    RouterModule
  ],
  declarations: [DetailComponent, DetailSongComponent, DetailAlbumComponent]
})
export class DetailModule { }
