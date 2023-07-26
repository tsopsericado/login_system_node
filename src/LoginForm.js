import React from 'react'
import "./Loginform.css"

function LoginForm() {
  return (
    <div className="app">
      <div className="registration">
        <h1>Registration</h1>
        <label>UserName</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
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