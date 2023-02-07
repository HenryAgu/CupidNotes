import React from "react";

// assets
import Logo from "../assets/Logo.png";

// stylesheet
import "./Navbar.css";

// react icons
import { FaPen } from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <div className="text_icons">
        <FaPen/>
        <FaTrashAlt/>
      </div>
    </nav>
  );
};

export default Navbar;
