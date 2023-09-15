import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../Styles/TopBar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const TopBar = () => {
  const [mobMenuActive, setMobMenuActive] = useState(false);

  const webMenu = () => {
    setMobMenuActive(!mobMenuActive);
  };
  return (
    <nav className="w-100 container-fluid d-flex justify-content-between align-items-center">
      
      <div className="web-menu">
      <ul className="d-flex">
              <li>
                HOME
              </li>
              <li>
                WHY US?
              </li>
              <li>
                MODELS
              </li>
            </ul>
      </div>

      <div>
        <a href="/">
          <img width={130} src={logo} alt="logo" />
        </a>
      </div>
      <div onClick={webMenu} className="mob-menu">
        {mobMenuActive ? <IoClose /> : <FaBarsStaggered style={{color: '#000'}}/>}

        {mobMenuActive ? (
          <div className="mob-menu-tray">
            <ul>
            <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">WHY US?</a>
              </li>
              <li>
                <a href="/">MODELS</a>
              </li>
              <li>
                <a href="/">LOG IN</a>
              </li>
              <li>
                <a href="/">SIGN UP</a>
              </li>
            </ul>
            <IoClose />
          </div>
        ) : null}
      </div>

      <div className="web-menu">
        <button className="login-btn btn-sm btn ms-4">LOG IN</button>
        <button className="signup-btn btn-sm btn ms-4">SIGN UP</button>
      </div>
    </nav>
  );
};

export default TopBar;
