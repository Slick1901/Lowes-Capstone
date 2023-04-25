import React from 'react';
import data from './cardData.json'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


export default function Card() {
  return (
    data.map((item) => {
      return (
        <div key={item.id}>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={item.image} alt={item.title} fluid />
              <a href={item.href}>
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
              <MDBBtn href={item.href}>Learn More</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      )
    })
  );
}
