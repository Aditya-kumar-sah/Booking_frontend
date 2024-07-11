import React from 'react'

const PlaceImg = ({place,index=0,className=null}) => {
    if(!place.photos?.length){
        return '';
    }
    if(!className){
        className = 'object-cover cursor-pointer h-80 w-80 rounded-2xl ';
    }
  return (
        <img className={className} src={"http://localhost:4003/uploads/"+place.photos?.[index]} alt='soon...'/>
  )
}

export default PlaceImg
