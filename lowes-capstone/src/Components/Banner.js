import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Banner({ message }) {
  const [showBanner, setShowBanner] = useState(true);

  function handleClose() {
    setShowBanner(false);
  }

  return (
    showBanner && (
      <div style={{ backgroundColor: 'lightgrey', padding: '15px' }}>
        <span style={{ color:'black', fontSize: "1.2rem" }}>Logged in! You are able to register for an event.</span>
        <Link to="/EventCart">
          <button style={{ float: 'right', marginTop: '-25px', marginRight: '10px' }}>Sign Up for an event</button>
        </Link>
        <button onClick={handleClose} style={{ float: 'right', marginTop: '-25px'}}>
          X
        </button>

      </div>
    )
  );
}

export default Banner;
