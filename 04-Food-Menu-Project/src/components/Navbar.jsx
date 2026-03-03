import React from "react";

import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="Nav-Deails">
      
    <div className="Navbar">
      <div className="Navbar-top">
        <img src={Logo} alt="" />
      </div>
      <div className="Navbar-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#order">Order</a>
          </li>
          <li>
            <a href="#book">Book</a>
          </li>
          <li>
            <a href="#catering">Catering</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="Navbar-Other">
      <h1>Find Your Food</h1>
      <h1>Delivered Fresh & hot</h1>
    </div>

    </div>
  );
}

export default Navbar;
