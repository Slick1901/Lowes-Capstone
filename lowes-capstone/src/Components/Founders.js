
import './about.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBCol,
  } from 'mdb-react-ui-kit';


export default function Founders(){
return (
<main>

<MDBRow className='row-cols-3 row-cols-md-5 g-4'>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100' style={{ backgroundColor: '#ffffff', color: 'black',}} >


    <MDBCardImage className='pics'
      src='./images/bryan.png'
      alt='...'
      position='top'
      />
    <MDBCardBody >
      <MDBCardTitle className="member-name">Bryan Olvera</MDBCardTitle>
      <MDBCardText className="member-bio">
      <p style={{ fontSize: '1.3rem' }}>
      Bryan contributed as a full-stack developer role in the development of Home Improvement. With a good foundation in both front-end and back-end development, Bryan made great contributions to the project's user interface, and functionality.
      </p>
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/bolvera/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100'style={{ backgroundColor: '#ffffff', color: 'black' }}>
    <MDBCardImage className='pics'
      src='./images/deb.png'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Deborah Case</MDBCardTitle>
      <MDBCardText className="member-bio">
      <p style={{ fontSize: '1.3rem' }}>

      Deborah contributed as a front-end developer to Home Improvement. With skills learned throughout the apprenticeship, Deborah played a key role in building the front-end of the project and also showed great communication skills as a team lead. 
      </p>
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/deborah-case/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100' style={{ backgroundColor: '#ffffff', color: 'black' }}>
    <MDBCardImage className='pics'
      src='./images/lindsey.jpg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Lindsey Harris</MDBCardTitle>
      <MDBCardText className="member-bio">
      <p style={{ fontSize: '1.3rem' }}>
      Lindsey Harris is a front-end developer who contributed to Home Improvement. With  many  skills and knowledge acquired through the apprenticeship, Lindsey played a pivotal role in developing the front-end and added the neccesary styling changes.
      </p>
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/lindsey-harris1228/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100' style={{ backgroundColor: '#ffffff', color: 'black' }}>
    <MDBCardImage className='pics'
      src='./images/chanty.jpg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Chanthai Phakdy</MDBCardTitle>
      <MDBCardText className="member-bio">
      <p style={{ fontSize: '1.3rem' }}>
      Chanthai Phakdy is a backend developer who contributed to Home Improvement. Using their backend knowledge and skills learned , Chanthai played a key role in building the backend of the project. Chanthai also assisted with front-end functionality aswell.
      </p>
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/chanthaiphakdy/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow' >
  <MDBCard className='h-100' style={{ backgroundColor: '#ffffff', color: 'black' }}>
    <MDBCardImage className='pics'
      src='./images/sincere.jpg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Sincere Legere</MDBCardTitle>
      <MDBCardText className="member-bio">
      <p style={{ fontSize: '1.3rem' }}>
      Sincere is a front-end developer who contributed to Home Improvement. With skills acquired through the apprenticeship, Sincere played a crucial role in developing the front-end of the project. Sincere also greatly contributed as the project manager.
      </p>
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/sincere-legere-007141247/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
{/* <MDBCol className='hover-shadow'>
   <MDBCard className='h-100' style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
    <MDBContainer>
       <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-primary fw-bold"
        >
          FAQ's
        </MDBTypography>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2" /> Do you offer any accommodations for disabled participants?
            </MDBTypography>
            <p style={{ fontSize: '1.3rem' }}>
             
              We strive to make our workshops accessible to all participants and do make neccesary accommodations. 
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" /> Can I bring my children to the workshops?
            </MDBTypography>
            <p style={{ fontSize: '1.3rem' }}>
              Children are welcome to attend our workshops with a parent or guardian. We also offer Workshops for them.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="user text-primary pe-2" />  Where are your workshops held?
            </MDBTypography>
            <p style={{ fontSize: '1.3rem' }}>
            Our workshops are held at various locations depending on the workshop topic and availability of the venue.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" />  Are your workshops free?
            </MDBTypography>
            <p style={{ fontSize: '1.4rem' }}>
            Our workshops are free, but we appreciate donations to help us continue offering our services to the community.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" /> What is the purpose of your organization?
            </MDBTypography>
            <p style={{ fontSize: '1.3rem' }}>
             
              Our organization aims to help disabled people, children, and women with their home improvement needs by offering in-person workshops and training sessions to enhance their knowledge and skills.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" />  What kind of workshops do you offer?
            </MDBTypography>
            <p style={{ fontSize: '1.3rem' }}>
            We offer a variety of workshops on topics such as basic home repairs, plumbing, electrical work, carpentry, and gardening. Our workshops are designed to be accessible to everyone, regardless of their skill level.
            </p>
          </MDBCol>
        </MDBRow>
      </section> 
    </MDBContainer>  
  </MDBCard> 
</MDBCol> */}
</MDBRow>
</main>
)
}