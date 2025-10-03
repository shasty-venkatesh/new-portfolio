import React, { useState } from "react";
import "../../styles/navbar.css";
import crossImg from "../../image/close.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index, item) => {
    setActiveIndex(index === activeIndex ? null : index);

    setTimeout(() => {
      navigate(item === "Work" ? "/project" : "/");
    }, 600);
  };

  const navItems = ["Index", "Work", "Freelancer"];

  return (
    <div className="navigator">
      <div className="title">
        <p style={{ color: "#1a1a1a" }}>b</p>
        <p>𝔗𝔥𝔢 𝔓𝔞𝔭𝔢𝔯 𝔓𝔬𝔯𝔱𝔣𝔬𝔩𝔦𝔬</p>
        <img src={crossImg} alt="img" onClick={() => navigate(-1)} />
      </div>
      <div className="navlist">
        <ul>
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(i, item)}
              className={activeIndex === i ? "strike" : ""}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
