import React, { useRef, useState } from "react";
import "../../styles/home.css";
import Main from "./Main";
import Banner1Img from "../../image/banner1.png";
import Banner2Img from "../../image/banner2.png";
import About1 from "./About1";
import About2 from "./About2";
import stampImg from "../../image/stamp.png";
import me2Img from "../../image/me2.jpg";
import svceImg from "../../image/svce.jpg";
import kceImg from "../../image/kce.png";
import kpr1Img from "../../image/kpr1.png";
import kpr2Img from "../../image/kpr2.png";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const skillButton = useRef("");
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [workData, setWorkData] = useState([
    {
      description: `"Won Special Mention Award at i-Cube 4.0 Hackathon for
                AI-powered waste recycling using YOLO, React, Node.js, MongoDB!
                Incredible teamwork, innovation, and learning! 🚀♻️"`,
      title:
        "Department of CSE, Sri Venkateswara College of Engineering, Chennai",
      image: svceImg,
      link: "https://drive.google.com/file/d/1i1Sw5kFGnxqEvZCNpyxPgqpfX_NqQscN/view?usp=sharing",
      transformX: -40,
    },
    {
      description: `"Won a 30-hour hackathon at Kongu Engineering College, earning ₹10,000 for creating an 
      innovative solution under tight deadlines, showcasing creativity and teamwork."`,
      title:
        "1st Place Winner – Kongu Engineering College Hackathon | ₹10,000 Cash Prize",
      image: kceImg,
      link: "https://drive.google.com/file/d/1eM_fmqUFkDwdefixcsOOD3TGVcG08PDi/view?usp=sharing",
      transformX: -40,
    },
    {
      description: `"Participated in the 24-hour national hackathon ‘VYNFEST’ at KPR Institute of Engineering and Technology, 
      delivering innovative solutions under tight deadlines."`,
      title: "24-Hour National Hackathon Participant – VYNFEST",
      image: kpr1Img,
      link: "https://drive.google.com/file/d/1eBe_gu4RQpYU7XLwmQaOq2s1V6Onap5L/view?usp=sharing",
      transformX: -40,
    },
    {
      description: `"Certificate awarded for 
      active participation in the "Hack the Horizon – 24 Hour Hackathon" held on March 27–28, 
      2025, organized by the IEEE CIS at KPR Institute of Engineering and Technology."`,
      title:
        "Certificate of Participation – Hack the Horizon 24-Hour Hackathon (2025)",
      image: kpr2Img,
      link: "https://drive.google.com/file/d/1tpwYNQN32nAxuRd1-h0vTn8gSuueDkYF/view?usp=sharing",
      transformX: -40,
    },
  ]);

  function handleTransform(index, direction, original) {
    for (var i = index + 1; i < workData.length; i++) {
      const updata = workData;
      const transformlist = updata.filter((_, i) => i >= index + 1);
      const nonTransformList = updata.filter((_, i) => i < index + 1);
      const updateTransform = transformlist.map((item) => ({
        ...item,
        transformX: direction,
      }));
      const updateNonTransform = nonTransformList.map((item) => ({
        ...item,
        transformX: original,
      }));
      console.log(workData);
      console.log([...updateNonTransform, ...updateTransform]);
      setWorkData([...updateNonTransform, ...updateTransform]);
      console.log(workData);
    }
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <ul className="section1">
            <li>
              <Main
                image={Banner1Img}
                title="Frontend Projects"
                about="Different Styles of Landing Page, Login Page, Page transtion, Animated
                    Website Using Next.js & React and many more."
              />
            </li>
            <li>
              <div className="banner3">
                <h1>All Work!</h1>
                <p className="para1">
                  A Featured selection the latest work- of the this year.
                </p>
                <p className="para2">
                  Tip! Scroll down you will find{" "}
                  <span>
                    <a style={{ color: "black" }} href="/project">
                      ALL WORK
                    </a>
                  </span>{" "}
                  Section.
                </p>
              </div>
            </li>
            <li className="banner2">
              <Main
                image={Banner2Img}
                title="Backend Projects "
                about="Developed innovative solutions including hotel booking platforms, OD form generators, portfolio builders, and smart trip checklists."
              />
            </li>
          </ul>
        </section>
        <section>
          <div className="section2">
            <p>SHASTY</p>
          </div>
        </section>
        <section className="section3">
          <div>
            <About1 />
          </div>
          <div>
            <About2 />
          </div>
        </section>
        <section>
          <div className="section2 section4">
            <p>Website</p>
          </div>
          <img src={stampImg} alt="stamp" className="stamp" />
        </section>
        <section className="section5">
          <div>
            <img src={me2Img} alt="me" className="me2img" />
          </div>
          <div>
            <h1 className="skillheader">Technical Expertise</h1>
            <div>
              <ul className="skilllist">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>React Native</li>
                <li>Git & GitHub</li>
                <li>Java</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>SupaBase</li>
                <li>Next js</li>
              </ul>
            </div>
            <div
              className="worksection"
              onMouseEnter={() => {
                skillButton.current.style.transform = "translateX(20rem)";
              }}
              onMouseLeave={() => {
                skillButton.current.style.transform = "translateX(0rem)";
              }}
            >
              <div
                className="workbutton"
                ref={skillButton}
                onClick={() => navigate("/project")}
              >
                <p className="arrow">→</p>
                <p className="worktitle">All Work</p>
              </div>
            </div>
          </div>
        </section>

        <section className="certificate">
          {workData.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className="section6"
                style={{
                  transform: `translateX(${item.transformX * index}rem)`,
                  position: "relative",
                  zIndex: isActive ? 100 : 1, // active card comes to front
                }}
                onMouseOver={() => handleTransform(index, -36, -40)}
                onMouseOut={() => handleTransform(index, -40)}
                onClick={
                  () => setActiveIndex(isActive ? null : index) // toggle active card
                }
              >
                <div className="achievecard">
                  <p>{item.description}</p>
                  <div className="workauthor">
                    <img src={item.image} alt="icon" />
                    <div>
                      <h1>{item.title}</h1>
                      <a target="_blank" href={item.link}>
                        View photo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <hr className="contactline" />
        <section className="section7">
          <div className="scrollcontact">
            <ul className="contact">
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
            </ul>

            <ul className="contact" aria-hidden="true">
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                Let's create something together{" "}
                <span>
                  <a href="mailto:shastyvenkatesh18@gmail.com">Email me</a>
                </span>
              </li>
            </ul>
          </div>
        </section>
        <hr className="contactline contactlinebottom" />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
