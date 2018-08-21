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
  dropdownLi: string = 'nav-item dropdown';
  dropdownMenu: string = 'dropdown-menu';
  dropdownLi2: string = 'nav-item dropdown';
  dropdownMenu2: string = 'dropdown-menu';
  dropleftLi: string = 'nav-item dropdown';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  logout() {
    this.authService
      .logout()
      .subscribe(data => {
        localStorage.clear();
        this.toastr.success('Logout', 'Success!');
        this.router.navigate(['/login']);
      })
  }

  expand() {
    this.dropdownLi2 = 'nav-item dropdown';
    this.dropdownMenu2 = 'dropdown-menu';
    this.dropdownLi.endsWith('show') ? this.dropdownLi = 'nav-item dropdown' : this.dropdownLi = 'nav-item dropdown show';
    this.dropdownMenu.endsWith('show') ? this.dropdownMenu = 'dropdown-menu' : this.dropdownMenu = 'dropdown-menu show';
  }

  expand2() {
    this.dropdownLi = 'nav-item dropdown';
    this.dropdownMenu = 'dropdown-menu';
    this.dropdownLi2.endsWith('show') ? this.dropdownLi2 = 'nav-item dropdown' : this.dropdownLi2 = 'nav-item dropdown show';
    this.dropdownMenu2.endsWith('show') ? this.dropdownMenu2 = 'dropdown-menu' : this.dropdownMenu2 = 'dropdown-menu show';
  }

  expand3() {
    this.dropleftLi.endsWith('show') ? this.dropleftLi = 'nav-item dropdown' : this.dropleftLi = 'nav-item dropdown show';
    this.dropdownMenu.endsWith('show') ? this.dropdownMenu = 'dropdown-menu' : this.dropdownMenu = 'dropdown-menu show';
  }
}
