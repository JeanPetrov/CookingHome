import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent implements OnInit {
  recipes: Observable<RecipeModel[]>;
  pageSize: number = 3;
  currentPage: number = 1;

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  pageChange(page) {
    this.currentPage = page;
  }
}
