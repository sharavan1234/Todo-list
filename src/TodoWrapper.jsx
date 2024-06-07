import React,{ useState } from 'react'

function TodoWrapper(){
  const [tasks,setTask]=useState(["eat","gym","repeat"]);
  const[newTask,setNewTask]=useState("");
  const[completedTasks,setCompletedTasks]=useState([]);

  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  function addCompletedTasks(index){
    setCompletedTasks(ct=>[...ct,tasks[index]]);
    deleteTask(index);
  }
  function addTask(){
    if(newTask.trim()!==""){
        setTask(t => [...t,newTask]);
        setNewTask("");
    }
  }
  function deleteTask(index){
    const updatedTasks= tasks.filter((_,i)=> i!==index)
    setTask(updatedTasks);
  }
  function deleteCompTask(index){
    const updatedTasks= completedTasks.filter((_,i)=> i!==index)
    setCompletedTasks(updatedTasks);
  }
  function moveTaskUp(index){
    if(index>0){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=
        [updatedTasks[index-1],updatedTasks[index]];
        setTask(updatedTasks);
    }
  }
  function moveTaskDown(index){
    if(index <tasks.length-1){
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=
        [updatedTasks[index+1],updatedTasks[index]];
        setTask(updatedTasks);
    }
  }

  return(
    <div className='todo-list'>
        <h1>TODO LIST</h1>
        <input type='text' placeholder='enter the task...'
         onChange={handleInputChange} value={newTask}></input>
         <button className='add-button' onClick={addTask}>Add</button>
         
         <ol>
            {tasks.map((task,index)=>
                <li key={index} >
                    <span className='text'>{task}</span>
                    <button className='done-button' onClick={()=>addCompletedTasks(index)}>Done</button>
                    <button className='moveup-button' onClick={()=>moveTaskUp(index)}>⬆️</button>
                    <button className='movedown-button' onClick={()=>moveTaskDown(index)}>⬇️</button>
                    <button className='delete-button' onClick={()=>deleteTask(index)}>delete</button>
                   
                </li>
            )}
         </ol>
         <h2>Completed Tasks</h2>
         <ol className='completed-tasks'>
          {completedTasks.map((task, index) =>
           <li key={index}>
             <span className='text'>{task}</span>
             <button className='delete-button' onClick={()=>deleteCompTask(index)}>delete</button>
           </li>
          )}
          </ol>
         
    </div>
  )
}

export default TodoWrapper;
