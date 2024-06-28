/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Explormenu.css";
import { menu_list } from "../../assets/assets";


function Expolrmenu({category,setCategory}) {
  return (
    <div className="explor_menu" id="explor_menu">
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">
        Choose from a divarse menu feacturing and delecatable araay of
        dishes.Oue misson is to satisfy your craving and elvate your dinning
        experiance , one delicions meal at time.
      </p>
      <div className="explor-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name?"active":" "} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  );
}

export default Expolrmenu;
