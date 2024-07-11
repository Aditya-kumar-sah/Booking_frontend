import React, { useEffect, useState } from 'react'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
import axios from 'axios';
const IndexPage = () => {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
       axios.get('/places').then(response => {
             setPlaces(response.data);
       }) 
    },[])
    const [text] = useTypewriter({
      words: ['Vacation!'],
      loop : {},
    })
  return (
   <div   className='px-5 pt-52 md:pt-40  bg-slate-200' >
    <h1 className='text-center text-white font-bold md:text-gray-700 pt-4 text-2xl md:text-6xl font-heading '>Say yes to Your <span className='text-3xlmd:text-7xl font-custom text-blue-800 font-bold md:text-violet-600'>{text} </span><Cursor/></h1>
    <div className='pt-8 pl-8  grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
    
       {places.length>0 && places.map(place => (
         <div className= 'bg-gray-500 bg-opacity-70 mb-4 max-w-md pb-10 md:pb-16 lg:pb-10 rounded-2xl mt-10'>
          <Link to={'/place/'+place._id}>
         
                  {place.photos?.[0] && (
                     <img className='hidden md:block rounded-2xl h-4/5 w-full pb-2 ' src={"https://booking-app-backend-two.vercel.app/uploads/"+place.photos?.[0]} alt=''/>
                   )}
         
              <h2 className='font-bold pl-2 text-sm lg:text-md text-white '>{place.address}</h2>
              <h3 className='text-sm  leading-4 pl-2 text-gray-200'> {place.title}</h3>
              
              <div className='mt-1  text-sm lg:text-md text-white'>
                 <span className='  font-bold pl-2 '>${place.price} </span>per night
              </div>
          </Link>
          </div>
       ))}
    </div>
    </div>
  )
}

export default IndexPage
