import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Login.css";
import { Login } from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/footer";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Layout from "./Pages/Layout";
// import Logreg from "./Components/Logreg";
// import axios from "axios";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





{/* <Router>
<div className="App">
  <Nav />
  <div>{currentForm}</div>
  <Routes>
  <Route path="/" element={<Layout />}> <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
    <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
    </Route>
  </Routes>
  <Footer />
</div>
</Router> */}
{/* <Route path="/layout" element={<Layout />} /> */}
{/* <Route path="/" element={<Home />} /> */}