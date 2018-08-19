import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  recipes: Observable<RecipeModel[]>;
  searchQuery: string = '';

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes();
  }

  search(query) {
    this.searchQuery = query.search;
  }
}