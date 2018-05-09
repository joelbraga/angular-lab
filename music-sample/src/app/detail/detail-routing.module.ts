import { DetailEntityComponent } from './detail-entity/detail-entity.component';
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
        component: DetailEntityComponent,
        data: {
          entity: 'album',
          display: 'album'
        }
      }, {
        path: 'song',
        component: DetailEntityComponent,
        data: {
          entity: 'song',
          display: 'track'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
