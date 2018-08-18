import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { recipeComponents } from './index';
import { CommonModule } from '@angular/common';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
    declarations: [
        ...recipeComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        RecipeRoutingModule
    ]
})

export class RecipeModule { }