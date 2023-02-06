import React from "react";

// assets
import Logo from "../assets/Logo.png";

// stylesheet
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
    </nav>
  );
};

export default Navbar;
