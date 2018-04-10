const courseListModel = require("../models/student.course.model");

const find = function(req, res){
    courseListModel.findOne(req.params.studentid, function(err, retobj){
        if(retobj){
            retobj = retobj.courses;//from student.course.model
        }
        sendResp(err.res,"Course list found", retobj);
    });
    
}

const update = function (req,res){
    req.body.studentid = req.params.studentid;
    courseListModel.findOneAndUpdate({"studentid": req.params.studentid},
    req.body, {upsert:true}, function(err, retobj){
        sendResp(err, res, "Course updated", retobj);
    });
}

function sendResp(err, res, message, retobj){
    const ret = {};
    if(err){
        ret.message = err.message;
        res.status(400).json(ret);
    } else {
        ret.message = message;
        ret.data = retobj;
        res.status(201).json(ret);
    }
}

module.exports = {"find":find, "update":update};