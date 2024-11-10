import { data } from 'autoprefixer'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import UserContext from '../context/UserContext'

const Form = () => {
  const {userData,setUserData}=useContext(UserContext);
 const{register,handleSubmit,reset} =useForm()
 const [task,setTask]=useState({})
 const onSubmit = (data) => {
  // Log form data to the console
  reset(); // Reset the form fields
  const employees=JSON.parse(localStorage.getItem('employeeData'));
  ///console.log(data.Name.toLowerCase())
  employees.forEach(element => {
 
    if(element.name.toLowerCase()===data.name.toLowerCase()) {
      element.taskCount.newTask=element.taskCount.newTask+1;
    element.tasks.push({...data,active: false,
      newTask: true,
      completed: false,
      failed: false,})
      localStorage.setItem('employeeData', JSON.stringify(employees));
      alert('Task created successfully')
      setUserData({employees});
    }
    
  });
};
  return (
    <div className='bg-[#1c1c1c]' onSubmit={handleSubmit(onSubmit)}>
        <form  className='  mt-5 flex justify-between p-3'>
            <div className='w-[45%] flex flex-col'>
                <h3  className='font-semibold'>Task Title</h3>
                <input {...register('title')} className='p-1 bg-transparent border outline-none rounded-sm my-3' type="text" placeholder='Make a UI Design' />
                <h3 className='font-semibold'>Date</h3>
                <input {...register('date')} className='p-1 bg-transparent border outline-none rounded-sm my-3' type="date"  />
                <h3 className='font-semibold'>Assign to</h3>
                <input {...register('name')} className='p-1 bg-transparent border outline-none rounded-sm my-3' type="text" placeholder='employee name' />
                <h3 className='font-semibold'>Category</h3>
                <input {...register('category')} className='p-1 bg-transparent border outline-none rounded-sm my-3' type="text" placeholder='design,dev,etc' />
            </div>
            <div className='flex flex-col w-[45%] gap-3'>
                <h3 className='font-semibold mt-1'>Description</h3>
                <textarea {...register('description')} className=' bg-transparent border outline-none rounded-sm h-[65%]' placeholder='Add description here' />
                <button className='p-2 bg-green-400 font-semibold rounded-md' type='submit'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default Form