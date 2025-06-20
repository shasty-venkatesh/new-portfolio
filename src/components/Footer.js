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
          <li>instagram</li>
          <li>• Twitter</li>
          <li>• github </li>
          <li>• Linkedin</li>
        </ul>
      </section>
    </div>
  );
}

export default Footer;
