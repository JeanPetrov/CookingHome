import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeAllComponent } from './recipe-all/recipe-all.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../authentication/auth.guard';
import { RecipeDeleteComponent } from './recipe-delete/recipe-delete.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: RecipeAllComponent, canActivate: [AuthGuard] },
    { path: 'all', component: RecipeAllComponent, canActivate: [AuthGuard] },
    { path: 'create', component: RecipeCreateComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: RecipeDetailsComponent, canActivate: [AuthGuard] },
    { path: 'delete/:id', component: RecipeDeleteComponent, canActivate: [AuthGuard] },
    { path: 'my', component: MyRecipesComponent, canActivate: [AuthGuard] },
    { path: 'search', component: RecipeSearchComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }