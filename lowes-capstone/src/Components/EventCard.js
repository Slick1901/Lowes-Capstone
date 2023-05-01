import React, { useEffect, useState } from "react";
import data from './cardData'
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
  
    function addToCart({productID, title, date, image}) {
        setCart([...cart, productID]);
        console.log(productID)
        console.log(productID.title)
        console.log(productID.date)
      }
  return (
    props.map((item) => {
      return (
       <div className="home">
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
            <MDBCardTitle>
            {item.title}
            </MDBCardTitle>
            <MDBCardText>
                {item.date}
            </MDBCardText>
            <MDBCardText>
                {item.time}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <button
              onClick={() => addToCart({productID:item.id,
                title: item.title,
                date: item.time,
                image: item.image})}
              className="product-button"
            >Sign Up</button>
        </div>
      </div> 
      )
    })
    
  );
}