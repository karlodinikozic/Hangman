import React, { useState } from "react";
import "../style/login.css";

import loginIcon from '../icons/icon1.png'

function Login() {
  const [name, setName] = useState("");

  function validateForm() {
    
  }

  const handleSubmit = () => {};

  return (
    <div className="Login">
      <div className="container">
        <header className="loginHeader">
          
          <img src={loginIcon} alt="" class="login-img"/>
          <h1>Log in</h1>
        </header>
        <main className="loginMain">
          <div className="box">
              <label>Enter your Name:</label>
              <input type="text" name="name"/>
          </div>
          <div className="box">
            <button onClick={handleSubmit}> Submit</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;
