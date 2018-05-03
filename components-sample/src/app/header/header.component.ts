import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const LOGIN_TEXT = 'Login';
const LOGOUT_TEXT = 'Logout';

@Component({
  selector: 'app-header',
  template: `
    <button (click)="clickEvent()">{{btnText}}</button>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  _isLoggedIn: boolean;
  btnText: string;

  @Output()
  isLogged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this._isLoggedIn = false;
    this.setLoginText();
  }

  clickEvent() {
    this._isLoggedIn = !this._isLoggedIn;
    this.setLoginText();
    this.isLogged.emit(this._isLoggedIn);
  }

  setLoginText() {
    if (this._isLoggedIn) {
      this.btnText = LOGOUT_TEXT;
    } else {
      this.btnText = LOGIN_TEXT;
    }
  }

}
