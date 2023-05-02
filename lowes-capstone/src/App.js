import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./Login.css";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Logreg from "./Components/Logreg";
import EventSignUpPage from "./Pages/EventSignUp";
import Registration from "./Pages/Registration";
import DashboardHome from "./Pages/DashboardHome";
import Products from './Pages/Products.js';
function App() {

  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboardhome" element={<DashboardHome />}  />
          {/* <Route path="/events" element={<Events />}  /> */}
          <Route path="about" element={<AboutPage />} />
          <Route path="/EventCart" element={<Products/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Dashboard" element={<DashboardHome />} />
          <Route path="/Contact" element={<EventSignUpPage />} />
          <Route path="/login" element={<Logreg />}  />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;



