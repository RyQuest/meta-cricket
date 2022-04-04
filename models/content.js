var mongoose = require('mongoose');

const validator = require('validator');

/**********RegistrationSchema**********/
var ContentSchema = mongoose.Schema({
    name : {
        type : String
    },
    price :{
        type : String
    },
    description :{
        type : String
    },
    image :{
        type: String
    }
    
})

var contentInfo = mongoose.model('Content', ContentSchema);

module.exports = {
    contentInfo : contentInfo
}
