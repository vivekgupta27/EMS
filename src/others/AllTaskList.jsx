import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const AllTaskList = () => {
  const {userData,setUserData}=useContext(UserContext)
  //console.log(userData.employees);
  //const{employees}=userData
  //console.log(userData)
  return (
    <div className='bg-[#1c1c1c] p-3 w-full mt-3 h-[40%] overflow-auto '>
  
  {userData.employees.map((employee, empIndex) => (
        <div key={empIndex}>
          <h2>{employee.name}</h2>
          {employee.tasks.map((task, taskIndex) => (
            <div key={taskIndex} style={{ border: "1px solid gray", padding: "10px", margin: "5px 0" }}>
              <p><strong>Task Title:</strong> {task.title}</p>
              <p><strong>Status:</strong> {task.completed ? "Completed" : task.failed ? "Failed" : "In Progress"}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
} 

export default AllTaskList