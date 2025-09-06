import React,{useState} from "react";
function CounterApp(){

const[count, setCount]=useState(0);
return(
<div>
<h1>Counter App</h1>
<h2>Count:{count}</h2>
<button onClick={()=>setCount(count+1)}>+increment</button>
<button onClick={()=>setCount(count-1)}>_decrement</button>
<button onClick={()=>setCount(0)}>Reset</button>
</div>


)


} export default CounterApp;