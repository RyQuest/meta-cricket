var mongoose = require('mongoose');
const validator = require('validator');
var KYCSchema=mongoose.Schema({
    name:{
        type:String
    },
    gender:{
        type:String
    },
    passportno:{
        type:String
    },
    image:{
        type:String
    }
})
var kycInfo = mongoose.model('kyc', KYCSchema);
module.exports = {
    kycInfo : kycInfo
}
 
