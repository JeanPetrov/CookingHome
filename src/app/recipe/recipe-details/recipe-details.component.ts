import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeModel } from '../models/recipe.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Observable<RecipeModel>;
  id: string;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private authService: AuthService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipeById(this.id);
  }
}