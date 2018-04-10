import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Student } from "../student/student.model"
import { AuthService } from "./auth.service";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    myForm: FormGroup;
    
    constructor(private authService: AuthService, private router: Router){
        authService.logout();
    }

    onSubmit(){
        const student = new Student(
            this.myForm.value.studentid, this.myForm.value.password,
            '',
            '',
            '',
            '',
            '',
            ''           
        );
        this.authService.login(student)
            .subscribe(
                data => {
                    // localStorage.setItem("token", data.token);
                    // localStorage.setItem('studentid', data.student.studentid);
                    // localStorage.setItem('email', data.student.email);
                    // localStorage.setItem('firstname', data.student.firstname);
                    // localStorage.setItem('lastname', data.student.lastname);
                    // localStorage.setItem('address', data.student.address);
                    // localStorage.setItem('city', data.student.city);
                    // localStorage.setItem('program', data.student.program); 
                    // localStorage.setItem("student",JSON.stringify(data.student));
                    this.router.navigateByUrl('/home');
                },
                error => console.error(error)
            );
            this.myForm.reset();
    }
    ngOnInit(){
        this.myForm = new FormGroup({
            studentid: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }
}