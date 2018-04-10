const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const student = require("../models/student.model");

passport.use(new LocalStrategy(
    function(studentid, password, done) {
        student.findbystudentid(studentid,function(err, studentobj){
            if(err){
                return done(null, false, {message: 'Internal error'});
            }
            if(!studentobj){
                return done(null.false, {message: 'user name or password incorrect'});
            }

            studentobj.checkPassword(password, function(err, isMatch){
                if(err){
                    return done(null, false, {message:'Internal error'});
                }
                if(isMatch){
                    return done(null, studentobj,{message:'login ok'});
                
                }else{
                    return done(null, false,{message:'username or password incorrect'});
                }
            });
        });
    }
));

module.exports = passport;