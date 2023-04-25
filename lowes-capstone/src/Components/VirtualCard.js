import React from 'react'
import ImageGallery from 'react-image-gallery';
import data from './virtualCardData.json'
import 'react-image-gallery/styles/css/image-gallery.css'
import CardButton from './CardButton';



const VirtualCard = () => {
    console.log(data)
  return (
data.map((item) => {
    return(<div>
<ImageGallery items={data} />
<CardButton />
    </div>)
})
    

  )
}

export default VirtualCard

