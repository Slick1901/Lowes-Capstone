import React, { useEffect, useState } from "react";
// import data from './cardData'
import './Card.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function EventCard({props, cart, setCart}) {
//  const [cart, setCart] = useState([]); // array of items in the cart
//  function addToCart(product) {
    // setCart([...cart, product]);
  console.log(props)
    function addToCart({productID, title, date, image, time, category, address}) {
           const product = {
            id: productID,
            title: title,
            date: date,
            image: image,
            time: time,
            category: category,
            address: address
        }
        setCart([...cart, product]);
     
        console.log(productID)
        console.log(title)
        console.log(date)
      }
  return (
    props.map((item) => {
      return (
       <div className="eventCard">
        <div className='hover-zoom'>
          <MDBCard  key={item.id} >
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src={item.image} alt={item.title} fluid >
            </MDBCardImage>
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
          <MDBCardText>
              {item.category}
            </MDBCardText>
            <MDBCardTitle>
            {item.title}
            </MDBCardTitle>
            <MDBCardText>
                {item.date} {item.time}
            </MDBCardText>
            <MDBCardText>
                {item.address}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <button
              onClick={() => addToCart({productID:item.id,
                title: item.title,
                date: item.date,
                image: item.image,
                time: item.time,
                category: item.category,
                address: item.address})}
              className="product-button"
            >Sign Up</button>
        </div>
      </div> 
      )
    })
    
  );
}