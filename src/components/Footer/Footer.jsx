import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            blanditiis eligendi odit error corrupti maiores sunt ipsam
            perferendis voluptas! Ipsam dolore quod consequatur laboriosam,
            maiores porro earum sunt adipisci doloremque nihil sed neque!
            Impedit quia velit sint suscipit esse, nulla vero non cupiditate!
            Eveniet, ipsam.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Compney</h2>
          <ul>
            <li>Home</li>
            <li>ABout</li>
            <li>Delivary</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footr-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1 728 2893 9293</li>
            <li>kuldipchudasama125@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2023 c tomato.com - All right riserved
      </p>
    </div>
  );
}

export default Footer;
