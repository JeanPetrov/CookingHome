import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Observable<UserModel[]>;

  constructor(private adminService: AdminService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.users = this.adminService.getAllUsers();
  }

}
