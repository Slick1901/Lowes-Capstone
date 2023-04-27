import React, { useState } from "react";
import Axios from 'axios'



function Test1() {
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
  
  const register = () =>{
    Axios.post('http://localhost:3001/register', {
      email: emailReg,
      password: passwordReg,
    }).then((response)=>{

      
      console.log(response)
    })
  }

  return(
  <div className="App">
    <div className="registration">
      <h1>Registration</h1>
      <label>email</label>
      <input type="text" 
      onChange={(e)=>{
        setEmailReg(e.target.value);
      }}
      />
      <label>Password</label>
      <input type="password"
          onChange={(e)=>{
            setPasswordReg(e.target.value);
          }}
      />
      <button onClick={register}>Register</button>
    </div>
  </div>
  )
    }
  export  default Test1;