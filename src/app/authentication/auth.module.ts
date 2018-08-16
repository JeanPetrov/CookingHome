import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { authComponents } from './index';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        ...authComponents
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        AuthService
    ]
})

export class AuthModule { }