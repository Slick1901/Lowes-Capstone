import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./Login.css";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Logreg from "./Components/Logreg";
import EventSignUpPage from "./Pages/EventSignUp";
import Registration from "./Pages/Registration";
function App() {
 

  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/EventSignUpPage" element={<EventSignUpPage />} />
          <Route path="/login" element={<Logreg />}  />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;



