import React, { useState } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { NavbarContainer } from "./style";
import RiseVestLogo from "../../../assets/logo.svg";
import ArrowDown from "../../../assets/down-arrow.svg";
import MenuIcon from "../../../assets/menu.svg";

const Navbar = () => {
  const links = [
    "Home",
    "Products",
    "Investment Club",
    "Blog",
    "About Us",
    "FAQs",
  ];

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  return (
    <NavbarContainer>
      <img src={RiseVestLogo} alt="rise-vest logo" />
      <div className="navbar-links">
        <Router>
          {links.map((link, index) => (
            <div className="navbar-links__single" key={index}>
              <NavLink
                className={
                  index === activeLinkIndex
                    ? "navbar-links__single__active"
                    : "navbar-links__single__inactive"
                }
                onClick={() => {
                  setActiveLinkIndex(index);
                }}
                to="#"
              >
                {link === "Products" ? (
                  <div>
                    {link} <img src={ArrowDown} alt="down arrow" />
                  </div>
                ) : (
                  link
                )}
              </NavLink>
              {index === activeLinkIndex && (
                <div className="navbar-links__single__active__circle"></div>
              )}
            </div>
          ))}
        </Router>
      </div>
      <img src={MenuIcon} alt="menu icon" className="menu-icon" />
    </NavbarContainer>
  );
};

export default Navbar;
