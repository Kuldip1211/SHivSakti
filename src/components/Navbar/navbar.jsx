/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./navbar.css";
import { Link } from "react-router-dom";
function navbar({ setShowLogin }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menu, setMenu] = useState("contact-us");

  return (
    <div className="navbar">
      <Link to="/home">
        
        <h3 className="logo">HAppy Gardning</h3>
      </Link>
      <ul className="navbar-menu">
        <Link to="/home"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explor_menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-downloded"
          onClick={() => setMenu("mobail-app")}
          className={menu === "mobail-app" ? "active" : ""}
        >
          mobail-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default navbar;
