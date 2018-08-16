import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.model = new RegisterModel('', '', '', '', '', null);
  }

  ngOnInit() {
  }

  register() {
    this.authService
      .register(this.model)
      .subscribe(data => {
        this.toastr.success('Register - ', 'Success!');
        this.router.navigate(['/login']);
      });
  }
}
