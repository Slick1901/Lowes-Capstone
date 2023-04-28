import React from 'react'
// import ImageGallery from 'react-image-gallery';
import data from './virtualCardData.json'
// import 'react-image-gallery/styles/css/image-gallery.css'
import CardButton from './CardButton';
import './VirtualCard.css';



const VirtualCard = (items) => {
    console.log(data)
  return (
<div>
 <a href={items.address}><CardButton /></a> 
     </div>

  )
}

export default VirtualCard

