import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/auth/login.component"
import { RegisterComponent } from "./components/auth/register.component";
import { StudentHomeComponent } from "./components/student/student.home.component";
import { RouteGuard } from "./components/auth/routeguard.service";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  //when matching router name, do full match
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', canActivate: [RouteGuard],component:StudentHomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);  //the exported object is added to app.module.ts