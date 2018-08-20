import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeModule } from './recipe/recipe.module';
// import { AdminRoutingModule } from './admin/admin-routing.module';

import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './authentication/auth.guard';


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
    // {
    //     path: 'admin',
    //     loadChildren: () => AdminRoutingModule
    // },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }