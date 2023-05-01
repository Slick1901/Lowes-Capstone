import React, { useState } from 'react';

function Banner({ message }) {
  const [showBanner, setShowBanner] = useState(true);

  function handleClose() {
    setShowBanner(false);
  }

  return (
    showBanner && (
      <div style={{ backgroundColor: 'lightgrey', padding: '15px' }}>
        <span style={{ color:'black', fontSize: "1.2rem" }}>Logged in! You are able to register for an event.</span>
        <button onClick={handleClose} style={{ float: 'right', marginTop: '-25px'}}>
          X
        </button>
      </div>
    )
  );
}

export default Banner;
