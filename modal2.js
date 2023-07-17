const mongoose  = require('mongoose') 

const Employee = mongoose.Schema({
    employeeName:{
        type:String,
        required:true
    },
    email:{
    type : String,
    required:true
    }

})
module.exports = mongoose.model('Employee',Employee)