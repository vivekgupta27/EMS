import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import UserContext from './context/UserContext'

const App = () => {
const {userData,setUserData}=useContext(UserContext)
const [user,setUser]=useState({role:'null'})
const [logged,setLogged]=useState(false)
//console.log(Data)

useEffect(()=>{
  const role=localStorage.getItem('role');
  if(localStorage.getItem('role')){
     const data=JSON.parse(localStorage.getItem('loggedInUser'));
     setUser({...data,role:localStorage.getItem('role')});
  }
 
},[])
const handleLogin = (email,password)=>{
    if(email=="admin@example.com"&&password=="123"){
      setUser({role:'admin'})
   
      localStorage.setItem('role', 'admin');
      setLogged(true)
    }
    else if(userData&& userData.employees.find((employee)=>email===employee.email&&password===employee.password)){
      const employeeData=userData.employees.find((employee)=>email===employee.email&&password===employee.password)
      localStorage.setItem('role', 'employee');
      setUser({...employeeData,role: 'employee'})
      localStorage.setItem('loggedInUser',JSON.stringify(employeeData))
      setLogged(true)
    }
    else{
      alert("Invalid Credentials")
    }
}



  return (
    <>
    {logged==false?<Login handleLogin={handleLogin}/>:''}
    {user.role=='admin'?<AdminDashboard data={user} setLogged={setLogged} />:''}
    {user.role=='employee'?<EmployeeDashboard data={user} setLogged={setLogged}/>:''}

   </>
  )
}

export default App