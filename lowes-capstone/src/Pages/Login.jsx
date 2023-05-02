import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  let navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
      console.log(response.data);
    });
  };

  return (
    <>
      <div className="authForm-container">
        <h2 className="log-h2">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="log-label" htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label className="log-label" htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button
            className="logButton"
            onClick={() => {
              navigate("/Dashboard");
              login();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};


