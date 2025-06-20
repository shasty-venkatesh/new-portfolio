import React from "react";
import "../styles/home.css";
import menuImg from "../image/menu.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <ul>
        <li className="address">Madurai, TN</li>
        <li className="title">𝔗𝔥𝔢 𝔓𝔞𝔭𝔢𝔯 𝔓𝔬𝔯𝔱𝔣𝔬𝔩𝔦𝔬</li>
        <li>
          <img
            src={menuImg}
            alt="menu"
            className="menu"
            onClick={() => navigate("/navbar")}
          />
        </li>
      </ul>
    </header>
  );
}

export default Header;
