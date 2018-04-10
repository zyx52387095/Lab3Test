const router =  require('express').Router();
const courseController= require('../controllers/course.controller');

router.route('/')
.post(courseController.insert)
.get(courseController.find);

router.route('/:studentid')
.post(courseController.update)
.delete(courseController.delete);

module.exports = router;