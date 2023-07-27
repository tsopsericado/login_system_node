import React, { useState } from 'react'
import "./Loginform.css"

function LoginForm() {
const [usernameReg, setUsernameReg] = useState('')
const [passwordReg, setpasswordReg] = useState('');




  return (
    <div className="app">
      <div className="registration">
        <h1>Registration</h1>
        <label>UserName</label>
        <input type="text"  onChange={(e) => {
          setUsernameReg(e.target.value);
        }}/>
        <label>Password</label>
        <input type="text"  onChange={(e) => {
          setpasswordReg(e.target.value);
        }}/>
        <button>Register</button>
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

export default LoginForm