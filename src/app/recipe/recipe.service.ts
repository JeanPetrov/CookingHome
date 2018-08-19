import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RecipeCreateModel } from './models/recipe-create.model';
import { RecipeModel } from "./models/recipe.model";
import { map } from 'rxjs/operators';

const appKey = 'kid_S1d8tC-LX';
const appSecret = '5167761269e64d44a853e32ee9e7e806';
const registerUrl = `https:///baas.kinvey.com/user/${appKey}`;
const recipesUrl = `https:///baas.kinvey.com/appdata/${appKey}/recipes`;

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

    getAllRecipes() {
        return this.http.get(recipesUrl, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }
}