import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';
import './WorkshopInfo.css'

export default function WorkshopInfo() {
  return (
    <div className='workshopInfoContainer'>
    <MDBCard className="info">
      <MDBCardHeader>Workshops</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>With the intent to serve our community to our fullest, Home Improvement is now offering workshops. Choose between virtual workshops where you can work from the comfort of your home at your own pace, or attend an in-person workshops specifically designed create a safe and inclusive learning environment for members of the community. Login or create account to register.</p>
          <div className='byLine'>
            More workshops to come
          </div>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}
