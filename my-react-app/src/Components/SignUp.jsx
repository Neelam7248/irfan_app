import React,{useState}from 'react';
import {useNavigate}from 'react-router-dom';
function SignUp(){
  const[userType,setUserType]=useState('');
  const[formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    resume:"",
    skills:"",
    company:"",
    needs:""
 });

const navigate=useNavigate();
const[submittedForm,setSubmittedForm]=useState(false);

const handleChange=(e)=>{
  const{name,value}=e.target;
  setFormData(prevState=>({
    ...prevState,
    [name]:value
  }))

}

const handleSubmit=async(e)=>{
  e.preventDefault();
  const formDatatoSend= new FormData();

  formDatatoSend.append('name',formData.name);
  formDatatoSend.append('email',formData.email);
  formDatatoSend.append('password',formData.password);
  formDatatoSend.append('resume',formData.resume);
  formDatatoSend.append('skills',formData.skills);
  formDatatoSend.append('company',formData.company);
  formDatatoSend.append('needs',formData.needs);
try{
const response=await fetch('http://localhost:5000/api/SignUp',{
  method:'POST',
body:formDatatoSend});

 const result=await response.json();
if(!response.ok){
  alert(result.message,"SignUp Failed");
return;//exit early in error
}

alert(result.message,"signUp Successfull");
setSubmittedForm({...formData,userType});
setTimeout(()=>{
  if(result.userType==="Client")
{
  navigate('/SignInPage');
}else if (result.userType==="Client")
{navigate('/SignInPage');}
},3000);
}
catch(error){
  alert("Error during Signup:",error);
  console.error("error during Signup:",error);
}}
return(
<div>
<h1>SignUP Form</h1>
<form onSubmit={handleSubmit}>

  <select name={userType} onChange={(e)=>e.target.value}required>
<option value="">User Type</option>
<option value="Candidate">Candidate</option>
<option value="Client">Client</option>

  </select>
<label>Name</label>
<input type="text" name="name" id="name "value={formData.name}onChange={handleChange}required/>
<label>Email</label>
<input type="email" name="email" id=" email" value={formData.email}onChange={handleChange}required/>
<label>Password</label>
<input type="password" name="password"id=" password" value={formData.password}onChange={handleChange}required/>

{
  userType==="Candidate"&&(
<div>
<label>resume</label>
<input type="file"name="resume" id="resume "onChange={(e)=>setFormData(prev=>({...prev,resume:e.target.files[0]}))}required/>
<label>Skills</label>
<input type="text"name="skills"id=" skills" value={formData.skills} onChange={handleChange}required/>
</div>
  )
}

{
userType==="Client"&&(
  <div>
<label>company</label>
<input type="text" name="company" id="company" value={formData.company} onChange={handleChange}required/>
<label>needs</label>
<input type="text"name="needs"id="needs " value={formData.needs}onChange={handleChange}required/>

  </div>
)
}
<button type="submit" style={{marginTop:'2px'}}>SignUP</button>

</form>

 {submittedForm&&(

<>
<h1>Submitted From</h1>
<p><strong>Name:</strong>{submittedForm.name}</p>

<p><strong>Email:</strong>{submittedForm.email}</p>

<p><strong>Password:</strong>{submittedForm.password}</p>

 { submittedForm.userType==="Candidate"&&(
  <>
  <p><strong>Resume:</strong>{submittedForm.resume?.name}</p>

  <p><strong>Skills:</strong>{submittedForm.skills}</p>
  </>
)
}{
  submittedForm.userType==="Client"&&(
    <>
    <p><strong>Company:</strong>{submittedForm.company}</p>
    
    <p><strong>Needs:</strong>{submittedForm.needs}</p>
    
    </>
  )
}

 </>
 )
 }
 </div>

)
}export default SignUp;