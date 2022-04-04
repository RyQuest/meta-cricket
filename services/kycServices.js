const {kycInfo}=require('../models/kyc')
const submit=async(object)=>{
    const user=new kycInfo(object)
    await user.save()
    return user
}
module.exports={
    submit
}