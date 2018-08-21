import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { AdminGuard } from './admin.guard';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: AllUsersComponent, canActivate: [AdminGuard] },
    { path: 'users', component: AllUsersComponent, canActivate: [AdminGuard] },
    { path: 'edit/:id', component: UserEditComponent, canActivate: [AdminGuard] },
    { path: 'delete/:id', component: UserDeleteComponent, canActivate: [AdminGuard] },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }