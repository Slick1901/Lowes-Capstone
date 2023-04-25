import React, { useState } from "react";
import { Login } from "../Pages/Login";
import Register from "../Pages/Register";
import Footer from "./footer";
import "../Login.css";


function Logreg() {
    const [currentForm, setCurrentForm] = useState("login");
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };
  
    return (
      <div>
      <div className="App">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
          )}
            </div>
            <Footer />
        </div>
    );
  }
  export default Logreg;
  