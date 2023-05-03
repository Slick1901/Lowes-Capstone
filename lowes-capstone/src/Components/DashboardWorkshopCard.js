import React, {useState, useEffect} from 'react'
// import data from './virtualCardData.json'
import classes from './WorkshopCard.module.css'
import { Link } from 'react-router-dom'
import RegisterButton from './RegisterButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
  // import CardButton from './CardButton';

const DashboardWorkshopCard = (props) => {
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
    <div className={classes.holder}>

<div  className='home'>
<MDBCard>
              
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src={props.props[itemId].image} alt={props.props[itemId].title} fluid >
          </MDBCardImage>
          <a>
            <div className={classes.mask} style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
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
          <Link to="/Eventcart" className={classes.icon}><RegisterButton /></Link>
          
        </MDBCardBody>
        <div className={classes.progressButtons}>
          <div><button className={classes.bButtons} onClick={decrementItemId}><FontAwesomeIcon icon={faChevronLeft} /></button></div>
          <div><button className={classes.bButtons} onClick={incrementItemId}><FontAwesomeIcon icon={faChevronRight} /></button></div>
          </div>
        </MDBCard>
        </div>
       
        
        <div className={classes.workshopInfo}>
            <h3>Workshop Inclusion</h3>
             <p>{props.props[itemId].categoryInfo}</p>
             <h3>Description</h3>
             <p>{props.props[itemId].text}</p>
       </div>
        </div>
        </div>
)
}

export default DashboardWorkshopCard