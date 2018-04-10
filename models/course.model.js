const mongoose = require('mongoose');
const schema = mongoose.Schema;

var courseSchma = new schema(
    {
        coursecode:{
            type: String,
            required: true,
            unique: true
        },
        coursename:{
            type: String,
            required: true
        },
        section:{
            type: String
        },
        semester:{
            type: String
        }
    },
    {
        ttimestamps:true
    }
);
 
module.exports = mongoose.model("course", courseSchma);