import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class RouteGuard implements CanActivate {
    constructor(private _authservice: AuthService){}

    canActivate(){
        return this._authservice.isLoggedIn();
    }
}