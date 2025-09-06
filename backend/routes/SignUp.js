const express=require('express');
const router=express.Router();
//const multer=require('multer');//
const bcrypt=require('bcrypt');
const Client=require('../models/Client');
const Candidate=require('../models/Candidate');
const upload=require('../utilities/multerConfig'); 
//file uplosad
/*const storage=multer.memoryStorage();
const upload=multer({storage});
const multiUpload=upload.fields([
    {name:'resume',maxCount:1}
   
]) *///as i am ussing file 
    // upload in memory that's way i am commenting these lines
//routerp post
router.post('/api/SignUp', upload.single('resume'),async(req,res)=>{
    const{name,email,password,userType, skills,company,needs}=req.body;

try{
    //check email exists
    const existingUser=await Client.findOne({email});
    const existingUser1=await Candidate.findOne({email});
if(existingUser||existingUser1){
    return res.status(400).json({message:"email already exists"});
}
//hashed password
const hashedPassword=await bcrypt.hash(password,10);

//create client signup
if (userType==='Client'){
    const client=new Client
({name,email,password:hashedPassword,company,needs})
await client.save();
return res.status(201).json({message:"client created successfully"});
} 

//create candidate SignUp
if(userType==='Candidate'){
    // THIS IS FOR MEMORY STORAGE //const resume=req.files?.resume?.[0];
    
//THE BELOW LINE IS FOR DISK STORAGE
    const resume = req.file;
//CHECK OR  verify the file was saved successfully,
    console.log('Saved resume:', resume?.path);

    const candidate=new Candidate({
    name,email,password:hashedPassword,skills,resume:resume&&{
         filename: resume.filename,
        contentType:resume.mimetype,
        originalName:resume.originalname
    }    })

    await candidate.save();
return res.status(201).json({message:"candidate created successfully"});
}else{
    return res.status(400).json({message:"invalid userType"})

}


}catch(error){console.error('SignupError:',error)}
return res.status(500).json({message:"internal server error"});









});
module.exports=router;