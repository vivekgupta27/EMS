import React, { useEffect ,useState} from 'react'
import UserContext from './UserContext'
import { getLocalStorage, setLocalStorage } from '../utlis/LocalStorage'

const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    useEffect(()=>{
      setLocalStorage()
      const {employees,admin}=getLocalStorage()
      setUserData({employees,admin})
    },[])

   
  
   
  return (
    <UserContext.Provider value={{userData,setUserData}}>
    {children}
    </UserContext.Provider>
    
  )
}

export default UserContextProvider