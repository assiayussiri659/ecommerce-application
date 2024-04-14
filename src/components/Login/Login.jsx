import "./Login.scss";
import React from "react";
const Login = () => {
  return (
    <div className="run">
      <h2>Login Here</h2>
      <input type="email" name="email" placeholder="Enter email"></input>
      <input type="password" name="" placeholder="Enter password"></input>
      <button className="btnn">
        <a href="#">Login</a>
      </button>
      <p className="link">
        Don't have an acount
        <a href="#">Sign up</a>
        <a>Here</a>
      </p>
      <p className="liw">Login in with</p>
    </div>
  );
};

export default Login;
