import React from 'react'

const PlaceImg = ({place,index=0,className=null}) => {
    if(!place.photos?.length){
        return '';
    }
    if(!className){
        className = 'object-cover cursor-pointer h-80 w-80 rounded-2xl ';
    }
  return (
        <img className={className} src={"https://booking-app-backend-f442.onrender.com/uploads/"+place.photos?.[index]} alt='soon...'/>
  )
}

export default PlaceImg
