import React, { useState } from 'react';

function Banner({ message }) {
  const [showBanner, setShowBanner] = useState(true);

  function handleClose() {
    setShowBanner(false);
  }

  return (
    showBanner && (
      <div style={{ backgroundColor: '#6CB4EE', padding: '25px' }}>
        <span style={{ fontWeight: 'bold' }}>Logged In!!! You are able to register for an event.</span>
        <button onClick={handleClose} style={{ float: 'right', marginTop: '-25px'}}>
          X
        </button>
      </div>
    )
  );
}

export default Banner;
