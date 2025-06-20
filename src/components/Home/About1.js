import React from "react";
import meImg from "../../image/me.jpg";

function About() {
  return (
    <div className="about1">
      <p>Interative</p>
      <h1>artist!</h1>
      <img src={meImg} alt="me" />
      <div className="information">
        <h1>I</h1>
        <p>
          am Shasty Venkatesh G, a Artificial Intelligence and Data Science
          Engineering student and a passionate web developer. With a strong
          foundation in modern web technologies, I specialize in creating
          dynamic, responsive, and user-friendly websites. I am committed to
          delivering high-quality solutions that enhance digital experiences.
          Let's build something great together!
        </p>
      </div>
    </div>
  );
}

export default About;
