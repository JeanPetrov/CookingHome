import { Component, OnInit } from '@angular/core';
import { RecipeCreateModel } from '../models/recipe-create.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-recipe-delete',
  templateUrl: './recipe-delete.component.html',
  styleUrls: ['./recipe-delete.component.css']
})
export class RecipeDeleteComponent implements OnInit {
  id: string;
  model: RecipeCreateModel;

  constructor(private recipeService: RecipeService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(this.id)
      .subscribe(data => {
        this.model = data;
      });
  }

  ngOnInit() {
  }

  delete() {
    this.recipeService
      .deleteRecipe(this.id)
      .subscribe(() => {
        this.toastr.success('Deleted recipe.', 'Success!');
        this.router.navigate(['/recipes/all']);
      });
  }

}
