import React,{useState} from "react";
import UserForm from '../Components/UserForm';
import CounterApp from '../Components/CounterApp';
import ToDoApp from "../Components/ToDoApp";
import Footer from '../Components/Footer';
import SignUpPage from '../Components/SignUp';
import CustomerOrder from '../Components/CustomerOrderForm';
import '../App.css';
function Home(){
    const[showUserForm,setShowUserForm]=useState(false);
    const[showCustomerOrderForm,setShowCustomerOrderForm]=useState(false);
    
    const[showCounter,setShowCounter]=useState(false);
    const[showToDoApp,setShowToDoApp]=useState(false);
    const[showSignUpForm,setShowSignUpForm]=useState(false);
    const handleToggle=(e)=>{
setShowUserForm(!showUserForm);
    }
const handleToggle5=(e)=>{
setShowCustomerOrderForm(!showCustomerOrderForm);
    }

    const handleToggle1=(e)=>{
        setShowCounter(!showCounter);
    }
      const handleToggle2=(e)=>{
        setShowToDoApp(!showToDoApp);
    }
      const handleToggle3=(e)=>{
        setShowSignUpForm(!showSignUpForm);
    }
return(
    <div style={{textAlign:"center " ,padding:"2rem"}}>
        <h1>Welcome To My Home Page</h1>
<button onClick={handleToggle} >{showUserForm?'Hide Form':'Show Form'}</button>
    {showUserForm&& <UserForm/>}
<button onClick={handleToggle5} >{showCustomerOrderForm?'Hide CustomerOrder':'Show CustomerOrder'}</button>
    {showCustomerOrderForm&& <CustomerOrder/>}

<button onClick={handleToggle1} >{showCounter?'Hide Couter':'Show Counter'}</button>
    {showCounter && <CounterApp/>}

<button onClick={handleToggle2} >{showToDoApp?'Hide App':'Show App'}</button>
    {showToDoApp && <ToDoApp/>}
<button onClick={handleToggle3}>{showSignUpForm?'HideSignUp Form':'Show signUp Form'}</button>
{showSignUpForm && <SignUpPage/>}
<Footer/>
    </div>
)
}
export default Home;