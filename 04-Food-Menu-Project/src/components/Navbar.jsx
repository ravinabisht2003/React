import React from "react";

import Logo from "../assets/Logo.png";
import {Search} from 'lucide-react'
import {ChevronDown} from 'lucide-react'

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
      <p>You can order delivery. Order catering and book <br/>a table as you wish at your nearest location </p>
      <div className="Nav-Srch">
        <div className="Nav-Srch-Left">
        <div><Search /></div>
        <input name="text" type="text" placeholder="find nearest food here"/>
        </div>
        <div className="Nav-Srch-Right">
          <div>set location</div>
          <div><ChevronDown /></div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Navbar;
