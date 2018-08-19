import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { recipeComponents } from './index';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeService } from './recipe.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthService } from '../authentication/auth.service';


@NgModule({
    declarations: [
        ...recipeComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        RecipeRoutingModule,
        NgxPaginationModule
    ],
    providers: [
        RecipeService,
        AuthService
    ]
})

export class RecipeModule { }