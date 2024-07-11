import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingWidget from '../BookingWidget';
import PlaceImg from '../PlaceImg';
import PlaceGallary from '../PlaceGallary';

const PlacePage = () => {
    const {id} = useParams();
    const [place,setPlace] = useState(null);
    
    useEffect(() => {
           if(!id){
             return;
           }
           axios.get(`/places/${id}`).then(response => {
                setPlace(response.data)
           })
    },[id])

    if(!place){
         return '';
    }

  return (
    <div className='py-8 w-full bg-cover bg-gray-100 pt-56 lg:pt-40 px-8 '>
         <h1 className='text-3xl'>{place.title}</h1>
         <a className='my-2 block font-semibold underline' target='_blank' href={'http://maps.google.com/?q='+place.address}>{place.address}</a>
         <PlaceGallary place={place}/>
         <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]'>
           <div>
              <div className='my-4 '><h2 className='font-semibold text-2xl'>Description</h2>{place.description}</div>
              Check-in: {place.checkIn}<br/>
              Check-out: {place.checkOut} <br/>
              Max number of guests: {place.maxGuests}
            </div>
          <div>
         <BookingWidget place={place}/>
        </div>
    </div>
    <div>
       <h2 className='font-semibold text-2xl'>Extra Info</h2>
    </div>
    <div className='mb-2 mt-1 text-sm text-gray-700 leading-4'>{place.extraInfo}</div>
    </div>


  )
}

export default PlacePage
