import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { UserModel } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
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

  edit() {
    this.adminService.editUser(this.id, this.model)
      .subscribe(() => {
        this.toastr.success('Edited user.', 'Success!');
        this.router.navigate(['/admin/users']);
      });
  }
}
