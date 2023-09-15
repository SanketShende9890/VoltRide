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
  const goToMain = () =>{
    const mainSecttion = document.querySelector(".main-section");
    if (mainSecttion) {
      const yOffset = -60;
      const y =
        mainSecttion.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  const goToHome = () =>{
    const homeSection = document.querySelector(".hero-section");
    if (homeSection) {
      const yOffset = -60;
      const y =
        homeSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  return (
    <nav className="w-100 container-fluid d-flex justify-content-between align-items-center">
      <div style={{cursor: 'pointer'}} onClick={goToHome}>
          <img width={130} src={logo} alt="logo" />
      </div>
      <div className="web-menu">
      <ul className="d-flex">
              <li onClick={goToHome}>
                HOW IT WORKS?
              </li>
              <li>
                WHY US?
              </li>
              <li onClick={goToMain}>
                START
              </li>
            </ul>
      </div>

      
      <div onClick={webMenu} className="mob-menu">
        {mobMenuActive ? <IoClose /> : <FaBarsStaggered style={{color: '#000'}}/>}

        {mobMenuActive ? (
          <div className="mob-menu-tray">
            <ul>
            <li onClick={goToHome}>
                HOW IT WORKS?
              </li>
              <li>
                WHY US
              </li>
              <li onClick={goToMain}>
                START
              </li>
              <li>
                LOG IN
              </li>
              <li>
                SIGN UP
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
