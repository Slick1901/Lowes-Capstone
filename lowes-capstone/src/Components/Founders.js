
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
    MDBCol
  } from 'mdb-react-ui-kit';
export default function Founders(){
return (
<main>

<MDBRow className='row-cols-3 row-cols-md-2 g-4'>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100'>
    <MDBCardImage className='pics'
      src='./images/bryan.jpeg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Bryan Olvera</MDBCardTitle>
      <MDBCardText className="member-bio">
      Bryan contributed as a full-stack developer role in the development of Home Improvement. With a good foundation in both front-end and back-end development, Bryan made great contributions to the project's user interface, and overall functionality.
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/bolvera/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100'>
    <MDBCardImage className='pics'
      src='./images/deb.png'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Deborah Case</MDBCardTitle>
      <MDBCardText className="member-bio">
      Deborah is a front-end developer who contributed to Home Improvement. With skills learned throughout the apprenticeship, Deborah played a key role in building the front-end of the project. 
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/deborah-case/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100'>
    <MDBCardImage className='pics'
      src='./images/lindsey.jpg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Lindsey Harris</MDBCardTitle>
      <MDBCardText className="member-bio">
      Lindsey is a front-end developer who contributed to Home Improvement. With skills acquired through the apprenticeship, Lindsey played a pivotal role in developing the front-end of the project aswell as assisting with the backend.
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/lindsey-harris1228/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100'>
    <MDBCardImage className='pics'
      src='./images/chanty.jpg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Chanthai Phakdy</MDBCardTitle>
      <MDBCardText className="member-bio">
      Chanthai is a backend developer who contributed to Home Improvement. Using their backend knowledge, Chanthai played a key role in building the backend of the project.
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/chanthaiphakdy/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
<MDBCol className='hover-shadow'>
  <MDBCard className='h-100'>
    <MDBCardImage className='pics'
      src='./images/sincere.jpg'
      alt='...'
      position='top'
    />
    <MDBCardBody>
      <MDBCardTitle className="member-name">Sincere Legere</MDBCardTitle>
      <MDBCardText className="member-bio">
      Sincere is a front-end developer who contributed to Home Improvement. With skills acquired through the apprenticeship, Sincere played a crucial role in developing the front-end of the project.
      </MDBCardText>
      <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/sincere-legere-007141247/' target="_blank" role='button'>
      <MDBIcon fab icon='linkedin-in' />
    </MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBCol>
</MDBRow>
</main>
)
}