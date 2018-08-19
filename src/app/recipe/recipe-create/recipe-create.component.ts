import { Component, OnInit } from '@angular/core';
import { RecipeCreateModel } from '../models/recipe-create.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  model: RecipeCreateModel;

  constructor(private recipeService: RecipeService, private toastr: ToastrService, private router: Router) {
    this.model = new RecipeCreateModel('', '', '', '', '', '', '', '', '');
  }

  ngOnInit() {
  }

  create() {
    this.recipeService
      .create(this.model)
      .subscribe(data => {
        this.toastr.success('Submit recipe.', 'Success!');
        this.router.navigate(['/recipes/all']);
      });
  }
}
