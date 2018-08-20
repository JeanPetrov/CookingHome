import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: AllUsersComponent },
    { path: 'users', component: AllUsersComponent },
    { path: 'edit/:id', component: UserEditComponent },
    { path: 'delete/:id', component: UserDeleteComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }