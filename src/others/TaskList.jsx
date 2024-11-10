import React from 'react'
import AcceptedTask from '../Tasks/AcceptedTask'
import CompleteTask from '../Tasks/CompleteTask'
import FailedTask from '../Tasks/FailedTask'
import NewTask from '../Tasks/NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='mt-10  h-[55%] py-2 flex gap-4 overflow-x-auto'>
      
       {data.tasks.map((task,index)=>{
  
        if(task.newTask){
             return <AcceptedTask key={index} task={task}  />
        }
        if(task.completed){
          return <CompleteTask key={index} task={task}  />
 
        }
  
       })}
     
  

    </div>
  )
}

export default TaskList