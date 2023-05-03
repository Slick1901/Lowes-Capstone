import React, { useState } from "react";
import Axios from "axios";
import "./eventform.css";
const EventForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const eventregister = () => {
    Axios.post("http://localhost:3001/contact", {
      name: name,
      email: email,
      number: number,
      message: message,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form className="register-form2">
          <label>Full Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Phone Number</label>
          <input
            type="text"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <label>Message:</label>

          <textarea
            rows="3"
            cols="50"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="button-container">
            <button onClick={eventregister}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EventForm;

