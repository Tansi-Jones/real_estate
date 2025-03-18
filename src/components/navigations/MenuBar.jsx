import React from "react";
import logo from "../../images/logo.png";

import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          <img
            src={logo}
            alt="property"
            style={{
              width: "300px",
              height: "50px",
              objectFit: "contain",
            }}
          />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/MarketPlace">MarketPlace</a>
          </li>
          <li>
            <a href="/FAQ">FAQ</a>
          </li>
          <li>
            <button className="button">Connect</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
