
const { userInfo } = require('../models/User')

const create=async(obj)=>{
    
    const user = new userInfo(obj);
    await user.save();
    return user
}

const update=async(id)=>{
    console.log()
    let updateone = await userInfo.updateOne({ '_id': id }, 
    { $set: { "name": req.body.name,
               "email" : req.body.email,
               "Phone" : req.body.phone} });
    res.send({updateone})
}
const deleteUser=async(id)=>{
    let updateone = await userInfo.deleteOne({ '_id': id } );
    res.send({updateone})
}
const checkuser=async(email)=>{
    try{
       return await userInfo.findOne({email:email})
    }
    catch(e){
       console.log(e)
    }
}
const checkuserpassword=async(email)=>{
    try{
       return await userInfo.findOne({password:password})
    }
    catch(e){
       console.log(e)
    }
}
const setPassword=async(password,email)=>{
    try{
        let updateone = await userInfo.updateOne({ 'email': email }, 
    { $set: { "password": password,
               
               } });
    return updateone
    }
    catch(error){
        console.log("error",error)
    }
}
module.exports = {
    create,
    update,
    deleteUser,
    checkuser,
    checkuserpassword,
    setPassword
}  