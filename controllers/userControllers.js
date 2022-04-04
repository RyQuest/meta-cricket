
const userServices = require('../services/userServices')

const create=async(req,res)=>{
    let obj = {
        name : req.body.name,
        email : req.body.email,
        Phone : req.body.phone,
        password:req.body.password
    }
    let issaved = await userServices.create(obj)
    res.send({issaved})
}
const update=async(req,res)=>{
    let id=req.body.id
    let issaved = await userServices.update(id)
}
const deleteOne=async(req,res)=>{
    let id=req.body.id
    let issaved = await userServices.deleteUser(id)
}
const loginOne=async(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    if(req.body.email=="" || req.body.password==""){
        return sendResponse(res, {status:false, message:"Enter all details"});
    }
    else{
        let user=await userServices.checkuser(email)
        if(user){
            let user1=await userServices.checkuser(password)
            if(user1){
                res.send({user1})
            }
            else{
                res.send({message:"password is incorrect"})
            }
            res.send({user})
        }
        else{
            res.send({message:"email is incorrect"})
        }
    } 
}
const resetPassword=async(req,res)=>{
    console.log(req.body)
    let password = req.body.password
    let email=req.body.email
    let user=await userServices.checkuser(email)
    console.log("user",user)
    if(user){
        let obj1=await userServices.setPassword(password,email)
        res.send({obj1})
    }
}
module.exports = {
    create ,
    update,
    deleteOne,
    loginOne,
    resetPassword
}