import React from "react";
import stampImg from "../image/stamp.png";

function Footer() {
  return (
    <div>
      <section className="footer">
        <div>
          <h1>SHASTY</h1>
          <img src={stampImg} alt="stamp" width="40px" height="70px" />
        </div>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/_.shastie._05/"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              Instagram{" "}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shasty-venkatesh"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              • Github{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shasty-venkatesh-g-375943297"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              • Linkedin{" "}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
