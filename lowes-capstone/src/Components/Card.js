import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import "./Card.css"

export default function Card({props}) {
  // const propData = props
  console.log(props)
  return (
    props.map((item) => {
      return (<div>
        <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={item.image} alt={item.title}>
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
          {item.text}
          </MDBCardText>
          <MDBBtn href='#'>Learn More</MDBBtn>
        </MDBCardBody>
      </MDBCard></div>)
    })
  
  );
}