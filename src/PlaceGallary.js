import React from 'react'
import { useState } from 'react';
import PlaceImg from './PlaceImg';

const PlaceGallary = ({place}) => {
    const [showAllPhoto,setShowAllPhoto] = useState(false);

    
    if(showAllPhoto){
        return(
           <div className='absolute inset-0 bg-black w-full h-screen z-50'>
           <h2 className='text-3xl mr-48 text-white'>Photos of {place.title}</h2>
           <button onClick={() => setShowAllPhoto(false)} className='fixed right-12 top-8 flex gap-2 mt-4 ml-3 py-2 px-4 rounded-2xl text-white bg-gray-500 shadow shadow-black'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
             <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
           Close Photo</button>
               <div className='bg-black p-8 grid gap-4'>
                    {
                   place?.photos?.length>0 && place.photos.map(photo => (
                        <div>
                          <img className='h-screen w-full' src={"https://booking-app-backend-f442.onrender.com/uploads/"+photo}/>
                        </div>
                   ))
               }
               </div>
           </div>
        )
   }

  return (
    <div className="relative ">
            <div onClick={() => setShowAllPhoto(true)}  className='h-auto w-auto'>
                <PlaceImg place = {place}/>
            </div>
            <button onClick={() => setShowAllPhoto(true)} className='flex gap-1 absolute bottom-2 left-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                         <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                      </svg>
                     Show more photos
            </button>
         </div>
  )
}

export default PlaceGallary
