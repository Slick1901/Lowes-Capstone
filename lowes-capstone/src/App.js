import React, { useState } from "react";
import "./Login.css";
import { Login } from "./Pages/Login";
import  Register  from "./Pages/Register"; //OOP
// import Footer from "./Components/footer";
// import Home from "./Pages/Home";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default App;
