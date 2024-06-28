// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
function header() {
  return (
    <div className="Header">
      <div className="Header-content">
        <h2>Order your favorite Plant</h2>
        <p>
          Chooos from a divrse menu feacturing a deletable array of dishes
          crafted with the finest ingrediants and culinary experties .Our misson
          is to satisfying your cravings and elevate your dining experianse ,
          one delisious meal at a time.
        </p>
        <a href="#explor_menu">
          <button>View More</button>
        </a>
        
      </div>
    </div>
  );
}

export default header;
