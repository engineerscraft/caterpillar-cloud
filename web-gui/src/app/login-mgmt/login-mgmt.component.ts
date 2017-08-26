import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-mgmt',
  templateUrl: './login-mgmt.component.html',
  styleUrls: ['./login-mgmt.component.scss']
})
export class LoginMgmtComponent implements OnInit {

  private userAttributes;

  constructor() { }

  ngOnInit() {
  }

  newPasswordRequied($event) {
    this.userAttributes = $event.userAttributes;
  }
}
