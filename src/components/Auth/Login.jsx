import {React,useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        handleLogin(email,password);
        setemail('');
        setpassword('');
    }
  return (
  
  <div className='w-full h-screen flex justify-center items-center'> 
    
    <div className='w-[25%] h-[75%] bg-[#1d1b1b] rounded-md  p-4 flex flex-col  gap-8'>
       <h1 className='text-3xl bg-transparent font-bold'>Log In</h1>
      <form onSubmit={handleFormSubmit} className='bg-transparent flex flex-col gap-5'>
      <input required className='bg-transparent mt-8 px-3 py-1 border border-red-700 outline-none w-full rounded-full ' placeholder='Username' type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
       <input required className='bg-transparent px-3 py-1 border border-red-700 outline-none w-full  rounded-full' placeholder='Password' type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
       <button className='bg-red-500 px-3 py-1 font-semibold  rounded-full'>Log in</button>
      </form>
    </div>
   
   </div> 
  
  )
}

export default Login