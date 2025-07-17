if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}
const express=require('express');
const multer = require('multer');
const SignUpRoutes = require('./routes/SignUp'); // adjust path as needed
const mongoose=require('mongoose');
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');
//connect to mongoose

mongoose.connect(process.env.DATABASE_URL);
const db=mongoose.connection;
db.on('error',error=>console.error("cannnot connected",error));
db.once('open',()=>console.log('connected to Mongoose'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(SignUpRoutes);
app.get('/',(req,res)=>
{
    res.send("Hello Neelam this is my first blog");
});
    app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

