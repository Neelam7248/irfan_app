import React,{useState} from "react";
function ToDoApp(){
  const[task,setTask]=useState('');
  const[tasks,setTasks]=useState([]);

  const handleAddTask=(e)=>{
e.preventDefault();
if(task.trim()!==''){
  setTasks([...tasks,task]);
  setTask('');

}

  }
const handleDelete=(index)=>{

const newTasks=tasks.filter((_,i)=>i!==index);

setTasks(newTasks);


}

return(
 
  <div>
    <form onSubmit={handleAddTask}>

      <h1>My To Do List</h1>
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
<button type="submit">Submit</button>

    </form>
<ul>
  {tasks.map((t,index)=>(
    <li key={index}>{t}
    
    
    <button onClick={()=>handleDelete(index)} style={{marginLeft:"10px"  }}>Delete</button>
      </li>
  ))}
</ul>


  </div>



)


} export default ToDoApp;