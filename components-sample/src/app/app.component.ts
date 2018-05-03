import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div><app-header (isLogged)="isLoggedIn = $event"></app-header></div>
    <div><app-search [userAuthenticated]="isLoggedIn" (termSearched)="term = $event"></app-search></div>
    <div>
      <app-content [termText]="term" [listValues]="cities">
        <h3 class="content-title">Cities</h3>
      </app-content>
      <app-content [termText]="term" [listValues]="countries">
        <h3 class="content-title">Countries</h3>
      </app-content>
    </div>
  `,
  styles: []
})
export class AppComponent {
  isLoggedIn: boolean;
  term: string;

  cities: string[] = [
    'Viana do Castelo',
    'Porto',
    'Ponte de Lima',
    'Braga',
    'Lisboa'
  ];

  countries: string[] = [
    'Portugal',
    'Espanha',
    'França',
    'Alemanha'
  ];
}
