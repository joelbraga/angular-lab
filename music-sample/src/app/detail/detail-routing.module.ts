import { DetailSongComponent } from './detail-song/detail-song.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetailComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'album'
      },
      {
        path: 'album',
        component: DetailAlbumComponent,
      }, {
        path: 'song',
        component: DetailSongComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
