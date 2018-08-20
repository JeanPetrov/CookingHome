import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserModel } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  id: string;
  model: UserModel;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.adminService.getUserById(this.id)
      .subscribe(data => {
        this.model = data;
      });
  }

  delete() {
    this.adminService.deleteUser(this.id)
      .subscribe(() => {
        this.toastr.success('Deleted user.', 'Success!');
        this.router.navigate(['/admin/users']);
      });
  }
}
