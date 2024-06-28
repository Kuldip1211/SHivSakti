// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./LoginPopPup.css";
import { assets } from "../../assets/assets";

function LoginPopPup(setShowLogin) {
  const [currState, setCurrState] = useState("Signup");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <a href="/home">
          <img src={assets.cross_icon} />
          </a>
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name " required />
          )}

          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currState === "Signup" ? "Creat Account" : "Login"}</button>
        <div className="login-popop-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the term of use & Privacy Policy</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Signup")}>Click Hear</span>
          </p>
        ) : (
          <p>
            Already Acoount?{" "}
            <span onClick={() => setCurrState("Login")}>Login Hear</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopPup;
