const { contentInfo } = require('../models/content')

const create=async(obj)=>{
    const user = new contentInfo(obj);
    await user.save();
    return user
}

const update=async(id)=>{
    console.log()
    let updateone = await contentInfo.updateOne({ '_id': id }, 
    { $set: { "name": req.body.name,
               "email" : req.body.email,
               "Phone" : req.body.phone} });
    return updateone
}

const deleteUser=async(id)=>{
    let updateone = await contentInfo.deleteOne({ '_id': id } );
    return updateone
}



module.exports = {
    create,
    update,
    deleteUser
}  