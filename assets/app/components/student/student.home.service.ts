import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http";
import { Location } from '@angular/common';
import { AuthService } from "../auth/auth.service";
//import { Book } from "../book/book.model";

import 'rxjs/Rx';
import { Observable } from "rxjs";


const headers = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class StudentHomeService{
    constructor(private http: Http, private authService: AuthService){
    }
    getCourses(studentid: string){
        return this.http.get('http://localhost:3000/student'+studentid +"?token=" + this.authService.token(), {headers:headers})
            .map((response:Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }
    getAvailableCourses(){
        return this.http.get('http://localhost:3000/course/' + "?token=" +this.authService.token(), {headers:headers})
            .map((response: Response)=> response.json())
            .catch((error: Response)=>Observable.throw(error.json()));
    }
    save(studentid:string, data){
        const body = JSON.stringify(data);
        
        return this.http.post('http://localhost:3000/student/' + studentid+ "?token=" +this.authService.token(), body, {headers: headers})
            .map((response:Response)=>response.json())
            .catch((error:Response) => Observable.throw(error.json()));
    }
}