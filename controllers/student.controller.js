const student = require("../models/student.model");

require('./student.passport.local.controller');

const register = function(req, res){

    var newStudent = new student({
        studentid: req.body.studentid,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        city: req.body.city,
        phonenumber: req.body.phonenumber,
        email:req.body.email,
        program: req.body.program
    });

    student.register(newStudent, function(err, student){
        if(err){
            res.status(500).json({
                message:err.message,
                obj:null,
                token:null
            });
        }else{
            res.status(201).json({
                message: 'Student registered',
                obj:student
            });
        }
    });
};
module.exports = {"register":register};