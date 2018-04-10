const mongoose = require('mongoose');
const schema = mongoose.Schema;

const courselist = new schema({
    studentid:{
        type: Number,
        required: true
    },
    courses:[{
        coursename: String,
        coursecode: String,
        section: String
    }]
},
    {
        timestamps:true
    }
);
module.exports = mongoose.model("studentcourselist", courselist);