const express = require('express');
const router = express.Router();
const passport =require('passport');
const authsvc = require('../access_auth');
const studentController = require('../controllers/student.controller');

router.post('/register', studentController.register);

router.post('/login', function(req, res, next){
    passport.authenticate('local', {session:false}, (err, student, info)=> {
        if(err||!student){
            return res.status(400).json({
                // message: 'No user',
                message: info,
                student : student
            });
        }
        req.login(student, {session:false}, (err)=>{
            if(err){
                res.send(err);
            }
            const token = authsvc.createToken({student:student.studentid});
            student.password='';
            return res.json({student, token});
        });
    })(req, res);
});

module.exports = router;