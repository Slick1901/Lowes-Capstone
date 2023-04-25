import React from 'react';
import data from './cardData.json'
import CardButton from './CardButton';
import './Card.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple
} from 'mdb-react-ui-kit';


export default function Card() {
  // const propData = props
  // console.log(props)
  return (
    data.map((item) => {
      return (
      <div className='hover-zoom'>
        <MDBCard key={item.id} >
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
          <h5>
          {item.time}
          </h5>
          <CardButton>Learn More</CardButton>
        </MDBCardBody>
      </MDBCard>
      </div>)
    })
    
  );
}