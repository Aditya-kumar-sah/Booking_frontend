import React, { useState,useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../UserContext'
const LoginPage = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState(false)
  const {setUser} = useContext(UserContext)
  async function handleLoginSubmit(e){
    e.preventDefault();
    try {
       const response = await axios.post('/login',{email,password});
        setUser(response.data)
        alert('login successful')
        setRedirect(true)
    } catch (error) {
       alert('login failed')
    }
  }
if(redirect){
     return <Navigate to={'/'}/>
}

  return (
    <div style={{backgroundImage: `url(${require('../image/bg7.jpg')})`}}   className='pt-80 md:pt-56 lg:pt-56 grow flex items-center justify-around bg-no-repeat  h-auto lg:h-screen  lg:bg-cover lg:object-contain  '>
        <div className='-mt-32'>
        <h1 className='text-4xl text-center mb-4 font-heading text-white'>Login</h1>
        <form className='max-w-md center mx-auto px-10' onSubmit={handleLoginSubmit}>
             <input className='w-full border-2 border-black my-1 py-2 px-3 opacity-45 rounded-2xl text-black' value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='your@gmail.com'/>
             <input className='w-full border-2 border-black  my-1 py-2 px-3 opacity-45  rounded-2xl text-black' value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='password'/>
             <button className="bg-gray-300 p-2 w-full border-2 border-black  opacity-45  text-black rounded-2xl"  type='submit'>Login</button>
             <div className='text-center  py-2 text-white lg:text-gray-700'>Dont't have an account yet? <Link className='underline text-balck font-heading font-bold' to="/register">Register Now</Link></div>
        </form>
        </div>
    </div>
  )
}

export default LoginPage
