import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: AllUsersComponent },
    { path: 'users', component: AllUsersComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }