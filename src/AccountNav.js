import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const AccountNav = () => {

    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
   
    if(subpage === undefined){
        subpage = 'profile'
    }
   
    function linkClasses (type=null) {
        
        let classes = 'px-6 py-2  bg-gray-400 rounded-full text-white';
        if(type === subpage){
            classes = `px-6 py-2 bg-purple-400 border border-blue-300 text-white font-bold rounded-full`;
        }
        return classes;
  }
  

  return (
    <nav className='w-full flex flex-col items-center sm:flex-row sm:justify-center mt-8 gap-2 mb-8'>
    <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
    <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
    <Link className={linkClasses('places')} to={'/account/places'}>My accomodations</Link>
   </nav>

  )
}

export default AccountNav
