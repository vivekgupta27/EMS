import React, { useEffect } from 'react'

const Header = ({data,setLogged}) => {
   const handleLogout=()=>{
     localStorage.setItem('role','');
     localStorage.setItem('loggedInUser','');
     //window.location.reload();
     setLogged(false);
 
  }
  //console.log(setLogged)
 
  return (
    <div className='flex justify-between items-end '>
        <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl'>{data.name} 👋 </span></h1>
        <button onClick={handleLogout} className='bg-red-700 py-2 px-5 font-semibold rounded-md'>Logout</button>
    </div>
  )
}

export default Header