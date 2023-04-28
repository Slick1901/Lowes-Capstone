import React from 'react';
import { Link } from 'react-router-dom'
import {
  MDBBtn
} from 'mdb-react-ui-kit';
// import './Hero.css'

export default function Hero() {
  return (
    <div>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')", height: '35rem' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Home Improvement</h1>
              <h4 className='mb-3'>Empowering communities across America</h4>
              <Link to="/about"><MDBBtn outline color='light'>
                Learn More
            </MDBBtn></ Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}