import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeModule } from './recipe/recipe.module';
import { AdminModule } from './admin/admin.module';

import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './authentication/auth.guard';
import { AdminGuard } from './admin/admin.guard';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'recipes',
        loadChildren: () => RecipeModule,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        loadChildren: () => AdminModule,
        canActivate: [AdminGuard]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }