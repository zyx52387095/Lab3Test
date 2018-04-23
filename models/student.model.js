const mongoose = require('mongoose');
const schema = mongoose.Schema;
const crypto = require('crypto');

const salt = '8nkjfdoi@$f93_039_=90ldkv';

const studentschema = new schema({
    studentid:{
        type:String,
        unique:true,
        minlength: 4,
        //required: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String,
        required: true,
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    program:{
        type: String
    }
    // provider: String,
    // providerId: String,
    // providerData: {}
});

studentschema.statics.register = function(student, cbfn) {
    student.password = doHash(student.password);
    student.save(cbfn);
}
studentschema.statics.findbystudentid = function(id, cbfn){
    studentmodel.findOne({studentid:id},cbfn);
}

studentschema.statics.checkPassword = function(password, cbfn) {
    if (this.password ==doHash(password)){
        cbfn(null. true);
    } else{
        cbfn(new Error('student name or password does not match', false));
    }
}

function doHash(val){
    return crypto.pbkdf2Sync(val, salt, 10000, 64, 'sha512').toString('base64');
}

var studentmodel = mongoose.model("student", studentschema);
module.exports = studentmodel;