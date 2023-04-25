import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./Login.css";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
// import Footer from "./Components/footer";
import Home from "./Pages/Home";
// import Nav from "./Components/Nav";
import AboutPage from "./Pages/About";
import Layout from "./Pages/Layout";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
      <div className="App">
        <div>{currentForm}</div>
        <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          {/* <Route path="/" element={<Layout />}>  */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          {/* </Route> */}
        </Routes>
        {/* <Footer /> */}
        </BrowserRouter>
      </div>
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