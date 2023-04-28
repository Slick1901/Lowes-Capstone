import React from "react";
import { useState } from "react";
import { Axios } from "axios";

// used OOP(Object Oriented Programming)
//create a class that extends the React.Component class.

function Register() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fullnameReg, setfullnameReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      email: emailReg,
      password: passwordReg,
      fullname: fullnameReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          onChange={(e) => {
            setfullnameReg(e.target.value);
          }}
          placeholder="full Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />

        <button onClick={register}>Register</button>
      </form>
    </div>
  );
}

export default Register;
