import React from "react";
import Nav from './Nav'
import Footer from "./footer";
import Founders from "./Founders";
import './about.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBRow,
  
} from 'mdb-react-ui-kit';
const AboutPage = () => {
  return (
  <div>
    <Nav/>
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCard style={{ backgroundColor: '#6CB4EE', color: 'white' }} className='text-body mb-3 my-card' >
        <MDBCardHeader>Who We Are?</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>
          <p style={{ fontSize: '1.3rem' }}>
          We are a non-profit organization committed to making a positive impact
        in our community. Our mission is to provide resources and support to
        those in need, and to promote philanthropy and volunteerism.
        </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
<MDBCard style={{ backgroundColor: '#6CB4EE', color: 'white' }} className='text-body mb-3 my-card'>
        <MDBCardHeader>How We Started?</MDBCardHeader>
        <MDBCardBody>
      
          <MDBCardText>
          <p style={{ fontSize: '1.3rem' }}>
          Our organization was founded in 2005 by a group of dedicated volunteers
        who saw a need for more community support. Since then, we have grown and
        expanded our programs to better serve those in need.
</p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
  <MDBCard style={{ backgroundColor: '#6CB4EE', color: 'white' }} className='text-body mb-3 my-card'>
        <MDBCardHeader>Who We Count On?</MDBCardHeader>
        <MDBCardBody>
      
          <MDBCardText>
            <p style={{ fontSize: '1.3rem' }}>
          We rely on the generosity of our donors and volunteers to continue our work. Without support from the community we wouldn't be able to continue helping others. Thank you for your continued support!
          </p>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBRow>
    </div>
    <div className="members-title">
            <h1> Meet The Team</h1>
        </div>
<Founders/>
    <Footer/>
    </div>
  );
};

export default AboutPage;
