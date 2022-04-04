var mongoose = require('mongoose');

const validator = require('validator');

/**********RegistrationSchema**********/
var UserSchema = mongoose.Schema({
    name : {
        type : String
    },
    email :{
        type : String
    },
    Phone :{
        type : String
    },
    password :{
        type:String
    },
    role:{
        type:String
    }
})

var userInfo = mongoose.model('Users', UserSchema);

module.exports = {
    userInfo : userInfo
}
