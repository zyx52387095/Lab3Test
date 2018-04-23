const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const student = require("../models/student.model");

passport.use(new LocalStrategy(
    {
        usernameField: 'studentid',
        passwordField: 'password'
    },
    function(studentid, password, done) {
        // student.findbystudentid(studentid,function(err, studentobj){
        //     if(err){
        //         return done(null, false, {message: 'Internal error'});
        //     }
        //     if(!studentobj){
        //         return done(null, false, {message: 'user name or password incorrect'});
        //     }
        //
        //     studentobj.checkPassword(password, function(err, isMatch){
        //         if(err){
        //             return done(null, false, {message:'Internal error'});
        //         }
        //         if(isMatch){
        //             return done(null, studentobj,{message:'login ok'});
        //
        //         }else{
        //             return done(null, false,{message:'username or password incorrect'});
        //         }
        //     });
        // });

        student.findOne({ studentid: studentid }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

module.exports = passport;