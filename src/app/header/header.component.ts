import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  logout() {
    this.authService
      .logout()
      .subscribe(data => {
        localStorage.clear();
        this.authService.authtoken = '';
        this.toastr.success('Logout', 'Success!');
        this.router.navigate(['/login']);
      })
  }
}
