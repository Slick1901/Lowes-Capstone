import React, { useState } from "react";
import Axios from "axios";
import Footer from "../Components/footer";
import Nav from "../Components/Nav";
import "../Login.css";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePassword = (password) => {
    // add your password requirements here
    return password.length >= 8;
  };
  const register = () => {
    if (validateEmail(emailReg) && validatePassword(passwordReg)) {
      Axios.post("http://localhost:3001/register", {
        email: emailReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };
  const handleEmailChange = (e) => {
    setEmailReg(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  let navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPasswordReg(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div className="login-container">
        <div className="login-img2">
          <img
            src={process.env.PUBLIC_URL + "/images/LogIn.png"}
            style={{ width: "450px", height: "450px" }}
          />
        </div>
        <div className="regForm-container">
          <h1>Registration</h1>
          <label className="reg-label">Email</label>
          <input
            className="input-reg"
            type="email"
            value={emailReg}
            onChange={handleEmailChange}
          />
          {emailError && <span className="error">{emailError}</span>}
          <label className="reg-label">Password</label>
          <input
            className="input-reg"
            type="password"
            value={passwordReg}
            onChange={handlePasswordChange}
          />
          {passwordError && <span className="error">{passwordError}</span>}
          <button
            className="regButton"
            onClick={() => {
              navigate("/login");
              register();
            }}
          >
            Sign-Up
          </button>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}
export default Registration;