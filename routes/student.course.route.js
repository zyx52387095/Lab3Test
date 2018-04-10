const router = require('express').Router();
const studentCourseController = require('../controllers/student.course.controller');
const authsvc = require('../access_auth');

//for every request coming to this route, check if there is valid token or return 401
router.use('/', function (req, res, next) {
    if (authsvc.verifyToken(req.query.token)) {
        next();
    } else {
        return res.status(401).json({
            title: 'Not Authenticated',
            error: err
        });
    }
});


router.route('/:studentid')
    .post(studentCourseController.update)  //Update
    .get(studentCourseController.find);    //Read

module.exports = router;