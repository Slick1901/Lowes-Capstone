import React, { useState, useEffect } from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import './footer.css'

export default function Footer() {

    const initialValues = { email: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            
        }
    }, [formErrors, isSubmit])

    const validate = (values) => {
        const errors = {}
        const regex = (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
        if (!values.email){
            errors.email = "Email is required!"
        } else if(!regex.test(values.email)){
            errors.email = "Email address is not valid"
        }

        return errors;
    }

    return (
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Company facebook page">
              <MDBIcon fab icon='facebook-f' /></a>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" aria-label="Company twitter page"><MDBIcon fab icon='twitter' /></a>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href="https://www.google.com" target="_blank" rel="noreferrer" aria-label="Company google search"><MDBIcon fab icon='google' /></a>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Company instagram page"><MDBIcon fab icon='instagram' /></a>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="Company linkedin page"><MDBIcon fab icon='linkedin-in' /></a>
            </MDBBtn>
  
          </section>
  
          <section className=''>
            <form action='' onSubmit={handleSubmit}>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>
  
                <MDBCol md='5' start onChange={handleChange}>
                  <MDBInput contrast type='text' name='email' label='Email address' className='mb-4' />
                </MDBCol>
                <p className='errorMessage'>{formErrors.email}</p>
  
                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4' >
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>
  
          <section className='mb-4'>
            <p>
              We're here because we care. Serving families and their communities for generations.
            </p>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/' rel="noreferrer">
             Home Improvement
          </a>
        </div>
      </MDBFooter>
    );
  
}

