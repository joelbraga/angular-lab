import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  template: `
    <a class="link" routerLink="album" routerLinkActive="link-activated">Album</a>
    <a class="link" routerLink="song" routerLinkActive="link-activated">Song</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .link {
      text-decoration: none;
      color: black;
    }
    .link-activated {
      color: blue
    }
  `]
})
export class DetailComponent {

}
