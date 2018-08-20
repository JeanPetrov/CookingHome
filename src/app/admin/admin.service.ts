import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { UserModel } from "./models/user.model";

const appKey = 'kid_S1d8tC-LX';
const appSecret = '5167761269e64d44a853e32ee9e7e806';
const usersUrl = `https://baas.kinvey.com/user/${appKey}?sort={"_kmd.ect":-1}`;
const userByIdUrl = `https://baas.kinvey.com/user/${appKey}/`;

@Injectable()
export class AdminService {

    constructor(private http: HttpClient) {

    }

    getAllUsers() {
        return this.http.get(usersUrl, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    getUserById(id: string) {
        return this.http.get(userByIdUrl + id, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    editUser(id: string, model: UserModel) {
        return this.http.put(userByIdUrl + id, model, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    deleteUser(id: string) {
        return this.http.delete(userByIdUrl + id, {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }

    restoreUser(id: string) {
        return this.http.post(userByIdUrl + id + '/_restore', {
            headers: {
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            }
        });
    }
}