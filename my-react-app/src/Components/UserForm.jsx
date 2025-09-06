import React,{useState} from "react";
function UserForm(){
    const[formData,setFormData]=useState({
        name:"",
        email:""
    });
    const[submittedForm,setSubmittedForm]=useState(null);
    const handleChange=(e)=>{
       
    const{name,value}=e.target;
    setFormData(prevState=>({
        ...prevState,
        [name]:value

    }));
    }

const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmittedForm(formData);
}



return(

<div>

<form onSubmit={handleSubmit}>

<h1>User Form</h1>

<label>Name</label>
<input type="text" id="name " name="name" value={formData.name} onChange={handleChange}/>
<label>Email</label>

<input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
<button type="submit">Submit</button>

</form>
{
    submittedForm &&(
        <div>
            <h1>Submitted Form Data</h1>
            
            <p>    <strong>Name:</strong>{submittedForm.name} </p>

            <p>    <strong>Email:</strong>{submittedForm.email} </p>
                        

            
            
            </div>
    )
}


</div>



)


} export default UserForm;