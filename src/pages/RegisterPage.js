import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const RegisterPage = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function registerUser(e){
      e.preventDefault(); //through this page will not reload
      try {
        await axios.post('/register',{
        name,
        email,
        password,
      })
      alert('Registration successfull, now you can login')
      } catch (error) {
         alert('Registration failed, please try again later')
      }
      
  }
  return (
    <div style={{backgroundImage: `url(${require('../image/bg8.jpg')})`}} className='pt-80 md:pt-56 lg:pt-56  grow flex items-center justify-around bg-no-repeat  h-auto w-full   bg-cover object-contain'>
        <div className='-mt-32'>
        <h1 className='text-4xl text-center mb-4 text-white font-heading'>Register</h1>
        <form className='max-w-md center mx-auto  px-4' onSubmit={registerUser}>
             <input className='w-full border-2 my-1 py-2 px-3 rounded-2xl opacity-45  border-black' type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='name'/>
             <input className='w-full border-2 my-1 py-2 px-3 rounded-2xl opacity-45  border-black' type='email' value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='your@gmail.com'/>
             <input className='w-full border-2 my-1 py-2 px-3 rounded-2xl opacity-45  border-black' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder='password'/>
             <button className="bg-gray-300 p-2 w-full text-white rounded-2xl border-2  border-black opacity-45"  type='submit'><span className='text-black'>Register</span></button>
             <div className='text-center py-2 text-white'>Already have an account? <Link className='underline text-xl text-white font-bold' to="/login">Login</Link></div>
        </form>
        </div>
    </div>
  )
}

export default RegisterPage
