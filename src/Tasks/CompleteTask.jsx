import React from 'react'

const CompleteTask = ({task}) => {
  return (
    <div className='h-full w-[22%] rounded-xl bg-blue-400 flex-shrink-0 p-4'>
    <div className='  flex justify-between items-center'>
        <h1 className={`bg-red-700 px-2 py-1 w-fit rounded-md font-medium text-sm`}>{task.category}</h1>
        <h1>{task.date}</h1>
    </div>
    <h1 className='text-2xl font-semibold mt-5 mb-3'>{task.title}</h1>
    <p className=''>{task.description}</p>
    
</div>
  )
}

export default CompleteTask