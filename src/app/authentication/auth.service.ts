import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';


const appKey = 'kid_S1d8tC-LX';
const appSecret = '5167761269e64d44a853e32ee9e7e806';
const registerUrl = `https:///baas.kinvey.com/user/${appKey}`;
const loginUrl = `https:///baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https:///baas.kinvey.com/user/${appKey}/_logout`;
const adminId = '5f32064a-4a63-464d-aa98-6c26fbbc5d90';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(model: LoginModel) {
        return this.http.post(loginUrl, JSON.stringify(model),
            {
                headers: this.createAuthHeaders('Basic')
            });
    }

    register(model: RegisterModel) {
        return this.http.post(registerUrl, JSON.stringify(model),
            {
                headers: this.createAuthHeaders('Basic')
            });
    }

    logout() {
        return this.http.post(logoutUrl, {},
            {
                headers: this.createAuthHeaders('Kinvey')
            });
    }

    isAuthenticated() {
        return localStorage.getItem('authtoken') !== null;
    }

    isCreator(id: string) {
        return localStorage.getItem('id') === id;
    }

    isAdmin() {
        return localStorage.getItem('adminId') === adminId;
    }

    private createAuthHeaders(type: string) {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            });
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            });
        }
    }
}