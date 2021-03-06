import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  code: string;
  state: string;

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['code'];
      this.state = params['state'];
    });

    this.authService.isAuthenticated$.subscribe(val => {
      if(val) {
        router.navigate(['/account']);
      }
    });
  }

  ngOnInit(): void {
  }

}
