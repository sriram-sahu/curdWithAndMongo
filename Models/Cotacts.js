const mongoose =  require('mongoose') 

const Contact = mongoose.Schema({
    name:{
        type:String,
        required : [true,"Name should be Required"]
    },
    email:{
        type:String,
        required : [true,"Email should be Required"]
    },
    phoneNumber:{
        type:String,
        required : [true,"PhoneNumber should be Required"]
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

module.exports =  mongoose.model("contact" ,Contact)