const multer=require('multer');
const path=require('path');
const contentServices = require('../services/contentServices')
var Storage=multer.diskStorage({
    destination:'./public/content',
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
  })
  var upload=multer({
    storage:Storage
  }).single('file');
const create=async(req,res)=>{
    let obj = {
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        image:req.file.filename
    }
    let issaved = await contentServices.create(obj)
    res.send({issaved})
}
const update=async(req,res)=>{
    let id=req.body.id
    let issaved = await contentServices.update(id)
    res.send(issaved)
}
const deleteOne=async(req,res)=>{
    let id=req.body.id
    let issaved = await contentServices.deleteUser(id)
    res.send(issaved)
}
module.exports = {
    create ,
    update,
    deleteOne,
    upload


}