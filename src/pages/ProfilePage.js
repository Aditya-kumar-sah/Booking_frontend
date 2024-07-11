import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Navigate, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'
import AccountNav from '../AccountNav'

const ProfilePage = () => {
  const [redirect,setRedirect] = useState(null)
  const {ready,user,setUser} = useContext(UserContext)
  let {subpage} = useParams();
  if(subpage === undefined){
    subpage = 'profile'
  }

  async function logout(){
      await axios.post('/logout')
      
      setRedirect('/')
      setUser(null)
  }

  if(!ready){
     return 'Loading...'
  }

  if(ready && !user && !redirect){
     return <Navigate to={'/login'}/>
  }

  
  if(redirect){
    return <Navigate to={redirect}/>
  }

  return (
    <div  className='bg-slate-200 pt-56 md:pt-40  min-h-screen lg:pt-28  '>
     <AccountNav/>
       {
        subpage === 'profile' && (
            <div  className=' flex flex-col gap-4 items-center text-center max-w-lg mx-auto py-10 '>
               <div className='text-gray-600 font-heading text-5xl'> Logged in as: </div> <h2 className='text-3xl font-custom text-gray-600'>{user.name}</h2> <h2 className='text-gray-600'>Email: {user.email}</h2>
               <button onClick={logout} className='bg-gray-500 border opacity-75 text-gray-100 rounded-full w-60 px-3 py-2'>Log Out</button>
            </div>
        )
       }
       {
         subpage === 'places' && (
            <PlacesPage/>
         )
       }
    </div>
  )
}

export default ProfilePage
 