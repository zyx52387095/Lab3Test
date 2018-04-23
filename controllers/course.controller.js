const courseModel = require("../models/course.model");
 
const insert = function(req, res){
    courseModel.create(req.body, function(err, retobj){
        sendResp(err, res, "Course Added", retobj);
    })
}

const find = function(req,res) {
    courseModel.find(req.params.studentid, function(err, retobj){
        sendResp(err, res,"Course found", retobj);
    });
}

const del = function(req, res){
    courseModel.deleteOne({studentid:req.params.studentid}, function(err, retobj){
        sendResp(err, res, "Course removed", retobj);
    });
}

const update = function(req, res){
    courseModel.findOneAndUpdate({studentid:req.params.studentid}, req.body, function(err, retobj){
        sendResp(err,res, "Course Updated", retobj);
    });
}

function sendResp(err, res, message, retobj){
    const ret = {};
    if(err){
        ret.message = err.message;
        res.status(400).json(ret);

    } else{
        ret.message = message;
        ret.data = retobj;
        res.status(201).json(ret);
    }
}
module.exports = { "insert": insert, "find": find, "delete": del, "update": update };