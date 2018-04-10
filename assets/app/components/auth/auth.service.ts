import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import {Location} from '@angular/common';

import 'rxjs/Rx';
import { Observable } from "rxjs";

import {Student} from "../student/student.model";

const headers = new Headers({'Content-Type': 'application/json'});

@Injectable()
export class AuthService{

    constructor(private http:Http, private location: Location){}

    register(student:Student){
        const body = JSON.stringify(student);
        return this.http.post('/auth/register', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response)=> Observable.throw(error.json()));
    }

    login(student:Student){
        const body = JSON.stringify(student);
        return this.http.post('/auth/login', body, {headers:headers})
            .map((response:Response)=> response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') != null;
    }

    studentid(){
        return localStorage.getItem('studentid');
    }
    token(){
        return localStorage.getItem('token');
    }
    program(){
        return localStorage.getItem('program');
    }
}