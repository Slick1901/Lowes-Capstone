import React, { useState } from 'react';

const EventForm = () => {
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEventChange = (event) => {
    setEvent(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Event:', event);
    console.log('Date:', date);
    console.log('Location:', location);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#6CB4EE', color: '#fff',justifyContent:'', padding: '20px', borderRadius: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem', textTransform: 'uppercase' }}>Register For An Event</h2>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ display: 'block', marginBottom: '5px' }}>Name:</span>
        <input type="text" value={name} onChange={handleNameChange}  placeholder="Enter Your Name" style={{ padding: '10px', borderRadius: '10px', border: 'none', width: '100%', backgroundColor: '#F0F8FF', color: '#000' }}required/>
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ display: 'block', marginBottom: '5px' }}>Event:</span>
        <input type="text" value={event} onChange={handleEventChange} placeholder="Enter Event Type" style={{ padding: '10px', borderRadius: '10px', border: 'none', width: '100%', backgroundColor: '#F0F8FF', color: '#000' }} required/>
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ display: 'block', marginBottom: '5px' }}>Date:</span>
        <input type="text" value={date} onChange={handleDateChange} placeholder="Enter Event Date" style={{ padding: '10px', borderRadius: '10px', border: 'none', width: '100%', backgroundColor: '#F0F8FF', color: '#000' }} required/>
      </label>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <span style={{ display: 'block', marginBottom: '5px' }}>Location:</span>
        <select value={location} onChange={handleLocationChange} style={{ padding: '10px', borderRadius: '10px', border: 'none', width: '100%', backgroundColor: '#F0F8FF', color: '#000' }}>
          <option value="">Select location</option>
          <option value="New York"> Grier Heights Community Center--3100 Leroy St, Charlotte, NC 28205</option>
          <option value="San Francisco">Wilmore Community Center--501 West Blvd, Charlotte, NC 28203</option>
          <option value="Los Angeles">Carole Hoefener Center--615 E 6th St, Charlotte, NC 28202</option>
        </select>
      </label>
      <button type="submit" style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', backgroundColor: '#fff', color: '#000', cursor: 'pointer' }}>Submit</button>
    </form>
    </div>
  );
};

export default EventForm;

