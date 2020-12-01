import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit {
  options = {
    redirect_uri: 'localhost:4200/callback'
  }

  constructor(public authService: AuthService) { }

  handleLogin() {
    this.authService.loginWithRedirect({
      redirect_uri: 'localhost:4200/callback'
    });
  }

  ngOnInit(): void {
  }

}
