const express=require('express');
const router=express.Router();
const Customer=require('../models/Customer');
const multer=require('multer');
const cors=require(cors());

//manage Cors
router.use((req,res,next)=>
{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-headers","Content-Type")
    next();
})
//upload a file
const storage=multer.memoryStorage();
const upload=multer({upload});
const multiUpload=upload.fields([
    { name:resume ,maxCount:1}
])

//router.post
router.post('/api/customer',multiUpload, async(req,res)=>
    {
        const{name,email,address,phone}=req.body;

        if(!name||!email||!address||!phone){
            return res.status(400).json({message:"missing input fields"});
 }
 try{//Check email exists
const existingCustomer=await Customer.findOne({email})
if(existingCustomer){
    return res.status(400).json({message:"Email alrasy exists"});
}
//hashed Password
//const hashedPassword=new bcrypt.hash(password,10);

const customer=new Customer({
    name,email,address,phone
})
await customer.save();
return res.status(200).json({message:"customer is saved in db successfully"});
 }catch(error){
    console.error('Registration failed:', error);
    return res.status(500).json({message:"registration failed"}) }
}

)
module.exports=router;