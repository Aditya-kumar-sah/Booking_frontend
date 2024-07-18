import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccountNav from '../AccountNav';
import axios from 'axios';


const PlacesPage = () => {
  const [places,setPlaces] = useState([])
  useEffect(() => {
    axios.get('/userplaces').then(({data}) => {
            setPlaces(data);
    }).catch((error)=>{
     console.log(error);
  })
  },[])
  return (
    <div  className=' pt-56 lg:pt-32'>
        <AccountNav/>
        <div className='text-center'>
          <Link className='inline-flex gap-1 bg-gray-700 text-gray-400 border rounded-full py-2 px-6' to={'/account/places/new'}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
             </svg>
             Add new Place
          </Link>
       </div>
       <div className=' grid grid-cols-1 gap-y-1 gap-3 py-4 px-3'>
           {places.length > 0 && places.map(place => 
           (
             <Link to={'/account/places/'+place._id} className='flex flex-col items-center cursor-pointer gap-4 border-2 border-gray-500  p-4 mb-8  rounded-2xl '>
                 <div className=' text-center h-auto w-full max-w-sm '>
                   { place.photos.length>0 && (
                     <img className='object-fill rounded-2xl' src = {'https://booking-app-backend-f442.onrender.com/uploads/'+ place.photos[0]} alt = "" />
                   )}
                 </div>
                 <div className='opacity-75'>
                    <h2 className='text-xl font-heading text-gray-900'>{place.title}</h2>
                    <p className='text-sm mt-2 text-gray-700'>{place.description}</p>
                 </div>
             </Link>
           ))}
        </div>
   </div>
  )
}

export default PlacesPage
