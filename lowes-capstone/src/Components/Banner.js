import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Banner({ message }) {
 const [showBanner, setShowBanner] = useState(true);
 function handleClose() {
  setShowBanner(false);
 }
 return (
  showBanner && (
   <div style={{ backgroundColor: 'lightgrey', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ color:'black', fontSize: "1.2rem" }}>Logged in! You are able to register for an event.</span>
    <div>
     <Link to="/EventCart">
      <button style={{ marginRight: '10px' }}>Sign Up for an event</button>
     </Link>
     <button onClick={handleClose}>X</button>
    </div>
   </div>
  )
 );
}
export default Banner;