import React from 'react'
import Header from '../../others/header'
import Form from '../../others/Form'
import AllTaskList from '../../others/AllTaskList'
import { set } from 'react-hook-form'
const AdminDashboard = ({data,setLogged}) => {
  return (
    <div className='p-4 min- h-screen w-full'>
        <Header data={data} setLogged={setLogged} />
        <Form/>
        <AllTaskList/>
    </div>
  )
}

export default AdminDashboard