import React, { useState } from "react";
import Axios from "axios";
import Footer from "../Components/footer";
import Nav from "../Components/Nav";
import "../Login.css";

function Registration() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div className="login-img2">
        <img
          src={process.env.PUBLIC_URL + "/images/LogIn.png"}
          style={{ width: "450px", height: "auto" }}
        />
      </div>
      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input 
          type="text"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input 
          type="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button className="button-reg" onClick={register}>Sign-Up</button>
        <Footer />
      </div>
    </div>
  );
}
export default Registration;
