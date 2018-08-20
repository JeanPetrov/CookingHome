import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { adminComponents } from './index';
import { AdminRoutingModule } from './admin-routing.module';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
    declarations: [
        ...adminComponents,
        AllUsersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        AdminRoutingModule
    ],
    providers: [
    ]
})

export class AdminModule { }