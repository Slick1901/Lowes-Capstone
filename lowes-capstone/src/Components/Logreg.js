import React, { useState } from "react";
import { Login } from "../Pages/Login";
import Register from "../Pages/Register";
import Nav from "../Components/Nav";
import Footer from "./footer";
import "../Login.css";

function Logreg() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <Nav />
      <div className="login-container">
        <div className="login-img">
          <img src={process.env.PUBLIC_URL + '/images/log.png'} style={{ width: '450px', height: 'auto' }} />
        </div>
        <div className="login-form">
          {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} />
          ) :
            (
            <Register onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logreg;
