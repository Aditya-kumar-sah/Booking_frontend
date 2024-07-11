import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {differenceInCalendarDays} from "date-fns";
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const BookingWidget = ({place}) => {
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [numberOfGuests,setNumberOfGuests] = useState(1);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('')
    const [redirect,setRedirect] = useState('')
    const {user} = useContext(UserContext)

    useEffect(()=>{
        if(user){
            setName(user.name);
        }
    },[user])

    let numberOfNights = 0;
    if(checkIn && checkOut){
        numberOfNights = differenceInCalendarDays(new Date(checkOut),new Date(checkIn));
    }
    
    async function bookThisPlace(){
          if(!user){
            return alert('login first!');
          }
          const {data} = await axios.post('/bookings',{checkIn,checkOut,numberOfGuests,name,phone,
            place:place._id,
            price : numberOfNights*place.price,
           });
          const bookingId = data._id;
          setRedirect(`/account/bookings/${bookingId}`)
    }
    if(redirect){
        return <Navigate to={redirect}/>
    }
    
  return (
    <div className='bg-white p-4 rounded-2xl '>
        <div className='text-2xl text-center font-heading'>Price: ${place.price} per night</div>
        <div className='border rounded-2xl mt-4'>
           <div className='flex flex-col md:flex-row'>
             <div className=' flex flex-col items-start gap-1 py-3 px-4'>
               <label className='font-heading'>Check in:</label>
               <input className='px-2 py-1 border w-full border-gray-400  rounded-2xl' type='date' value={checkIn} onChange={ev => setCheckIn(ev.target.value)}/>
             </div>
             <div className=' flex flex-col items-start  gap-1 py-3 px-4 border-l'>
              <label className='font-heading'>Check out:</label>
              <input className='px-2 py-1 border w-full border-gray-400 rounded-2xl' type='date' value={checkOut} onChange={ev => setCheckOut(ev.target.value)}/>
             </div>
          </div>
          <div className='flex flex-col md:flex-row items-start md:items-center gap-1  py-3 px-4 border-t'>
            <label className='font-heading'>Number of Guests:</label>
            <input className='px-2 py-1 border w-full border-gray-400 rounded-2xl' placeholder='Enter Guests' type='number' value={numberOfGuests} onChange={ev => setNumberOfGuests(ev.target.value)}/>
           </div>
           {numberOfNights>0 && (
           <>
           <div className=' flex flex-col items-start  md:flex-row md:items-center gap-2 py-3 px-4 border-t'>
              <label className='font-heading'>Your Full Name:</label>
              <input className='px-2 py-1 border w-full border-gray-400 rounded-2xl' placeholder='Enter name' type='text' value={name} onChange={ev => setName(ev.target.value)}/>
           </div>
           <div className=' flex flex-col items-start md:flex-row  md:items-center gap-2 py-3 px-4 border-t'>
             <label className='font-heading'>Phone Number:</label>
             <input className='px-2 py-1 border w-full border-gray-400 rounded-2xl' placeholder='Enter Phone number' type='tel' value={phone} onChange={ev => setPhone(ev.target.value)}/>
           </div>
          </>
          )}
    </div>
    <button onClick={bookThisPlace} className=" flex items-center gap-1 justify-center my-4 bg-gray-300 p-2 w-full text-gray-600 rounded-2xl shadow shadow-gray-700">
       Book this place
       {numberOfNights>0 && (
          <span className='font-heading'>
             ${numberOfNights * place.price}
          </span>
       )}
    </button>
</div>
  )
}

export default BookingWidget
