import React from "react";

// assets
import Logo from "../assets/Logo.png";

// NavLink
import { Link } from "react-router-dom";

// stylesheet
import "./Navbar.css";

// react icons
import { FaPen } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ textIcons }) => {
  return (
    <nav>
      <Link to="/home">
        <img src={Logo} alt="" />
      </Link>
      {textIcons ? (
        <div className="text_icons">
          <FaPen className="inner_text_icon" />
          <FaTimes className="inner_text_icon" />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
