import React, {useState, useEffect} from 'react'
// import data from './virtualCardData.json'
import './Manny.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import CardButton from './CardButton';

const Manny = (props) => {
    console.log(props)


   const [itemId, setItemId] = useState(0)

const incrementItemId = () => {
    if (itemId < props.props.length - 1) {
          setItemId(itemId + 1)
    } else {
        return
    }
  
}

const decrementItemId = () => {
    if (itemId > 0) {
        setItemId(itemId - 1)
  } else {
      return
  }
}

return (
    <div>
        <h3>{props.props[itemId].category}</h3>
    <div className='mannyHolder'>
<MDBCard>
              
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={props.props[itemId].image} alt={props.props[itemId].title} fluid >
          </MDBCardImage>
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>
          {props.props[itemId].title}
          </MDBCardTitle>
          <MDBCardText>
          {props.props[itemId].date}
          </MDBCardText>
          <h5>
          {props.props[itemId].time}
          </h5>
          <CardButton>Learn More</CardButton>
          
        </MDBCardBody>
        <div className='progressButtons'>
          <div><button className='bButtons' onClick={decrementItemId}>Prev</button></div>
          <div><button className='bButtons' onClick={incrementItemId}>Next</button></div>
          </div>
        </MDBCard>
       
        
        <div className="workshopInfo">
            <h3>Workshop Inclusion</h3>
             <p>{props.props[itemId].categoryInfo}</p>
             <h3>Description</h3>
             <p>{props.props[itemId].text}</p>
       </div>
        </div>
        </div>
)
}

export default Manny
