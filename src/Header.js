import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'
import { GiPalmTree } from "react-icons/gi";
const Header = () => {
  const {user} = useContext(UserContext);
  return (
    <div >
      <header style={{backgroundImage: `url(${require('./image/bg2.jpg')})`}}  className = "z-50 fixed w-full flex flex-col gap-2 h-auto items-center md:flex-row md:justify-between  px-4 py-3 bg-no-repeat bg-cover  ">  
             <Link to="/" className = "flex items-center gap-1">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-7 text-white" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                   </svg>
                   <span className="font-bold text-xl text-white font-heading">booksm@rt</span>
             </Link>
             <div className="flex justify-center items-center text-white bg-gray-500 bg-opacity-40 border rounded-full px-4 py-2 gap-1 md:shadow-sm md:shadow-gray-300" >
                <div className='text-md sm:text-lg font-custom px-1 '>Book Your DreamPlace</div>
                    <button className="bg-gray-400 text-white border rounded-full">
                         <GiPalmTree className='h-9 w-9 text-white bg-gray-500  border border-white rounded-full' />
                    </button>
             </div>
             <Link to={user?"/account":"/login"} className="flex items-center justify-center bg-gray-500 bg-opacity-40  border border-gray-300 rounded-full py-2 px-4 gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
             <div  className=" bg-gray-500  text-white rounded-full border  border-white overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 relative top-1">
                   <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
             </div> 
             <div className='text-white'>
                {
                  !!user && (
                    <div>
                      {user.name}
                    </div>
                  )
                }
              </div>
            </Link>
       </header>
    </div>
  )
}

export default Header
