import React, { useState } from 'react';
import  Axios  from "axios";

const EventForm = () => {
  const [name, setName] = useState('');
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const eventregister = () =>{
  Axios.post('http://localhost:3001/events', {
    name: name,
    event: event,
    date: date,
    location: location
    }).then((response)=>{
        console.log(response)
      })
    }

    return (
        <div className="auth-form-container">
          <h2>Register</h2>
          <form className="register-form">
            <label>Full Name</label>
            <input type="text" onChange={(e)=>{
              setName(e.target.value);
            }}
              placeholder="full Name"
            />
            <label>Event</label>
            <input  type="text" onChange={(e)=>{
             setEvent(e.target.value);
            }}
            />
            <label >Date</label>
            <input  type="text" onChange={(e)=>{
              setDate(e.target.value);
            }}
            />
             <label>Location:</label>
        <select  type="text" onChange={(e)=>{
              setLocation(e.target.value);
            }} >
          <option value="">Select location</option>
          <option value="Grier Heights"> Grier Heights Community Center--3100 Leroy St, Charlotte, NC 28205</option>
          <option value="Wilmore">Wilmore Community Center--501 West Blvd, Charlotte, NC 28203</option>
          <option value="Carole Hoefener">Carole Hoefener Center--615 E 6th St, Charlotte, NC 28202</option>
        </select>
    
    
    <button onClick={eventregister}>Register</button>
          </form>
        </div>
      );
    }
  
  
  export default EventForm;
