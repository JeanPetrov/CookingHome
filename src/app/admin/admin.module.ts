import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { adminComponents } from './index';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';

@NgModule({
    declarations: [
        ...adminComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        NgxPaginationModule
    ],
    providers: [
        AdminService
    ]
})

export class AdminModule { }