import React from 'react';
import Map from '../Components/Map';
import Nav from '../Components/Nav';
import Footer from '../Components/footer';
import EventForm from '../Components/EventForm';
import Banner from '../Components/Banner';
function EventSignUpPage() {
  return (
    <div>
<Nav/>
<Banner/>
<EventForm/>
<Map/>
     <Footer/>
    </div>
  );
}

export default EventSignUpPage;