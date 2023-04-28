//Login Page

import React, { useState } from "react";
import { Login } from "../Pages/Login";
import Nav from "../Components/Nav";
import Footer from "./footer";
import "../Login.css";
import Registration from "../Pages/Registration";

function Logreg() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="logreg">
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
            <Registration onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logreg;


