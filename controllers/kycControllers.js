const kycServices=require('../services/kycServices')
const submit1=async(req,res)=>{
    let object={
        name:req.body.name,
        gender:req.body.gender,
        passportno:req.body.passportno,
        image:req.file.filename
    }
    let issaved=await kycServices.submit(object)
    res.send({issaved})
}
module.exports={
    submit1
}