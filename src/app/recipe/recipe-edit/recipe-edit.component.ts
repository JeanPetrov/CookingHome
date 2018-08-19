import { Component, OnInit } from '@angular/core';
import { RecipeCreateModel } from '../models/recipe-create.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  model: RecipeCreateModel;

  constructor(private recipeService: RecipeService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(this.id)
      .subscribe(data => {
        this.model = data;
      });
  }

  ngOnInit() {
  }

  edit() {
    this.recipeService
      .editRecipe(this.id, this.model)
      .subscribe(() => {
        this.toastr.success('Edited recipe.', 'Success!');
        this.router.navigate(['/recipes/all']);
      });
  }
}
