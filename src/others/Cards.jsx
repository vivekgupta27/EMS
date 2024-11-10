import React from 'react'


const Cards = ({data}) => {
  return (
    <div className='flex gap-5 mt-5 '>
         <div className='w-[25%] bg-green-400 rounded-xl px-3 py-6'>
        <h2 className='text-xl font-semibold'>{data.taskCount.newTask}</h2>
        <h1 className='text-2xl font-semibold'>New Task</h1>
        </div>
      <div className='w-[25%] bg-blue-400 rounded-xl px-3 py-6'>
        <h2 className='text-xl font-semibold'>{data.taskCount.completedTask}</h2>
        <h1 className='text-2xl font-semibold'>Completed Task</h1>
      </div>
      <div className='w-[25%] bg-yellow-400 rounded-xl px-3 py-6'>
        <h2 className='text-xl font-semibold'>{data.taskCount.acceptedTask}</h2>
        <h1 className='text-2xl font-semibold'>Accepted Task</h1>
      </div>
     <div className='w-[25%] bg-red-400 rounded-xl px-3 py-6'>
        <h2 className='text-xl font-semibold'>{data.taskCount.failedTask}</h2>
        <h1 className='text-2xl font-semibold'>Failed Task</h1>
     </div>
    </div>
  )
}

export default Cards