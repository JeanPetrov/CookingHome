import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RecipeCreateModel } from './models/recipe-create.model';
import { RecipeModel } from "./models/recipe.model";
import { map } from 'rxjs/operators';

const appKey = 'kid_S1d8tC-LX';
const appSecret = '5167761269e64d44a853e32ee9e7e806';
const registerUrl = `https:///baas.kinvey.com/user/${appKey}`;
const recipesUrl = `https:///baas.kinvey.com/appdata/${appKey}/recipes`;
const recipesNewUrl = `https:///baas.kinvey.com/appdata/${appKey}/recipes?sort={"_kmd.ect":-1}`
const recipeByIdUrl = `https:///baas.kinvey.com/appdata/${appKey}/recipes/`;
const myRecipesUrl = `https:///baas.kinvey.com/appdata/${appKey}/recipes?query={"_acl.creator":"`

@Injectable()
export class RecipeService {

    constructor(private http: HttpClient) {

    }

    create(model: RecipeCreateModel) {
        return this.http.post(recipesUrl, JSON.stringify(model),
            {
                headers: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            });
    }

    editRecipe(id: string, model: RecipeCreateModel) {
        return this.http.put(recipeByIdUrl + id, model, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteRecipe(id: string) {
        return this.http.delete(recipeByIdUrl + id, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    getAllRecipes() {
        return this.http.get(recipesNewUrl, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    getRecipeById(id: string) {
        return this.http.get(recipeByIdUrl + id, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    getAllRecipesById(id: string) {
        return this.http.get(myRecipesUrl + id + '"}' + '&sort={"_kmd.ect":-1}', {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }
}