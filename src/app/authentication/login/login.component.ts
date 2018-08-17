import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login() {
    this.authService
      .login(this.model)
      .subscribe(data => {
        this.successfulLogin(data);
      });
  }

  successfulLogin(data) {
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.toastr.success('Login', 'Success!');
    this.router.navigate(['/home']);
  }
}
