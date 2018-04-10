import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { StudentHomeComponent } from './components/student/student.home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login.component';
import { RegisterComponent } from './components/auth/register.component';
import { routing } from './app.routing';
import { AuthService } from "./components/auth/auth.service";
import { RouteGuard } from "./components/auth/routeguard.service";
import { StudentHomeService } from './components/student/student.home.service';


@NgModule({
    declarations: [
        AppComponent,
        StudentHomeComponent,
        LoginComponent,
        RegisterComponent
        HeaderComponent

    ],
    providers:[AuthService, Location, RouteGuard, StudentHomeService],
    imports: [BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
],
    bootstrap: [AppComponent]
})
export class AppModule {

}