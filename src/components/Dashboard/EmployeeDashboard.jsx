import React from 'react'
import Header from '../../others/header'
import Cards from '../../others/Cards'
import TaskList from '../../others/TaskList'
import { set } from 'react-hook-form'
const EmployeeDashboard = ({data,setLogged}) => {
  return (
    <div className='bg-[#1c1c1cea] h-screen p-8'>
        <Header data={data} setLogged={setLogged}/>
         <Cards data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard