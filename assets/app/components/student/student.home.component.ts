import { Component } from '@angular/core';
import { Student } from './student.model';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { StudentHomeService } from "./student.home.service";
import { OnInit } from '@angular/core';
import { Course } from "../course/course.model"

@Component({
    templateUrl: './student.home.component.html'
})
 export class StudentHomeComponent{
     studentid: string;
     program: string;
     _courses: Array<Course> = [];
     _availablecourses: Array<Course> = [];
     //email: string;
     constructor(private authService: AuthService, private studenthomeservcie: StudentHomeService, private router:Router){
         this.studentid = authService.studentid();
         this.program = authService.program();
         this.doInit();
     }
     doInit(){
         this._courses = new Array<Course>();
         this._availablecourses = new Array<Course>();
         this.studenthomeservcie.getCourses(this.studentid).subscribe(
             val => {
                let course: any;
                
                for(let course of val.data){
                    this._courses.push(new Course(course.coursecode, course.coursename, course.section, course.semester));
                }
             },
             error => {console.error(error)}
         );
         this.studenthomeservcie.getAvailableCourses().subscribe(
            val => {
                let course: any;

                for(let course of val.dsata){
                    this._availablecourses.push(new Course(course.coursecode, course.coursename, course.section, course.semester));
                }
         },
            error => {console.error(error)}
        );
     }
     onRemove(coursecode){
         this._courses.forEach((item, index)=>{
             if(item.coursecode === coursecode){
                 this._availablecourses.push(new Course(item.coursecode, item.coursename, item.section, item.semester));
                 this._courses.splice(index, 1);
             }
         });
     }
     onSave(){
         let obj = {courses: this._courses};
         this.studenthomeservcie.save(this.studentid, obj).subscribe(
             val =>{
                 console.log('saved');
             },
             error => {console.error(error)}
         );
     }
     onReset(){
         this.doInit();
     }
     onAdd(coursecode){
         this._availablecourses.forEach((item,index)=>{
             if(item.coursecode ==coursecode){
                 this._courses.push(new Course(item.coursecode, item.coursename, item.section, item.semester));
                 this._availablecourses.splice(index, 1);
             }
         });
     }

 }