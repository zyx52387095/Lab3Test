import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Student } from "../student/student.model"
import { AuthService } from "./auth.service";
import { FromEventObservable } from "rxjs/observable/FromEventObservable";

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    myForm: FormGroup;
    message: string;

    constructor(private authService: AuthService, private router: Router){}

    onSubmit(){
        const student = new Student(
            this.myForm.value.sutdentid,
            this.myForm.value.password,
            this.myForm.value.firstname,
            this.myForm.value.lastname,
            this.myForm.value.email,
            this.myForm.value.address,
            this.myForm.value.city,
            this.myForm.value.program,
        );
        this.authService.register(student)
            .subscribe(
                data => {
                    this.router.navigateByUrl('/login');
                },
                error => this.message = error.message
            );
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            studentid: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
            firstname: new FormControl(null),//validators not required.
            lastname: new FormControl(null),
            email: new FormControl(null,Validators.required),
            address: new FormControl(null),
            city: new FormControl(null),
            program: new FormControl(null),
        });
    }

}