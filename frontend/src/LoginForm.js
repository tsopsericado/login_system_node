import React, { useState } from "react";
import "./LoginForm.css"
import Axios from "axios";

function LoginForm() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register =()=>{
    Axios.post('http://localhost3000/register', {
      username: usernameReg,
      password: passwordReg,
    })
  }



  return (
    <div className="app">
      <div className="registration">
        <h1>Registration</h1>
        <label>UserName</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="username..." />
        <input type="password" placeholder="Password..." />
        <button>Register</button>
      </div>
    </div>
  );
}

export default LoginForm;
